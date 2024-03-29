import sys
import joblib
import numpy as np
import hashlib
import json
import uuid
import requests
from sklearn.preprocessing import StandardScaler

campi_desiderati = ["_source,layers,eth,eth.dst", "_source,layers,eth,eth.dst_tree,eth.addr", "_source,layers,ip,ip.src", "_source,layers,ip,ip.dst", "_source,layers,tcp,tcp.dstport", "_source,layers,tcp,tcp.flags_tree,tcp.flags.reset", "_source,layers,tcp,tcp.flags_tree,tcp.flags.syn"]


def get_original_data(data, idx):
    """Restituisce i dati originali per un dato indice."""
    if idx < 0 or idx >= len(data):
        print(f"Indice {idx} non valido.")
        return None
    return data[idx]

def estrai_info_pacchetto(pacchetto):
    try:
        # Estrai i campi dal pacchetto
        ip_src = pacchetto['_source']['layers']['ip']['ip.src']
        ip_dst = pacchetto['_source']['layers']['ip']['ip.dst']
        porta_src = pacchetto['_source']['layers']['tcp']['tcp.srcport']
        porta_dst = pacchetto['_source']['layers']['tcp']['tcp.dstport']
        protocollo = pacchetto['_source']['layers']['frame']['frame.protocols']

        # Stampa i risultati
        return ip_src, ip_dst, porta_src, porta_dst, protocollo
       
    except KeyError as e:
        print(f"Chiave non trovata: {e}")




# Assicurati che queste funzioni siano coerenti con quelle del tuo script di addestramento
def extract_features(data):
    features = []
    for oggetto in data:
        feature_vector = []
        for campo in campi_desiderati:
            campi = campo.split(",")
            valore = oggetto
            for campo in campi:
                if isinstance(valore, dict) and campo in valore:
                    valore = valore[campo]
                elif isinstance(valore, list) and all(isinstance(item, dict) for item in valore) and campo.isdigit():
                    index = int(campo)
                    if index < len(valore):
                        valore = valore[index]
                    else:
                        print(f"Indice '{campo}' non valido nella lista.")
                        break
                else:
                    
                    break
            else:
                if isinstance(valore, str):
                    valore = float(int(hashlib.sha1(valore.encode('utf-8')).hexdigest(), 16))
                elif not isinstance(valore, float):
                    print(f"Il valore non è né una stringa né un float: {valore}")
                    break

                feature_vector.append(valore)

        if len(feature_vector) == len(campi_desiderati):
            features.append(feature_vector)

    return features


def carica_dati(nome_file):
    try:
        with open(nome_file, "r") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError) as e:
        print(f"Errore durante il caricamento del file {nome_file}: {e}")
        return []

def send(data):
    ip_src, ip_dst, porta_src, porta_dst, protocollo = data
    id = str(uuid.uuid4())
    url = "http://localhost:3000/api/Dashboard/newVulnerability"
    payload = {"id": id, "ip_source": ip_src, "ip_dest": ip_dst, "porta": porta_dst, "protocollo": protocollo,"id_azienda": "11"}
    headers = {
        'Content-Type': 'application/json'
    }
    response = requests.post(url, json=payload, headers=headers)
    print(response.text)


def prepara_dati(X):
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(np.array(X))
    return X_scaled

def test_modello(clf, X_scaled,nome_file_test):
    predictions = clf.predict(X_scaled)
    contatore = sum(val == -1 for val in predictions)
    print(f"Predizioni di anomalie: {contatore} su {len(predictions)}")
 
    # Prendi le prime 10 anomalie (o tutte se ce ne sono meno di 10)
    anomalie = [idx for idx, val in enumerate(predictions) if val == -1]
    prime_dieci_anomalie = anomalie[:1]

    # Esegui la richiesta API per ogni anomalia trovata
    for idx in prime_dieci_anomalie:
        dato_anomalo = idx
      
       
        send(estrai_info_pacchetto(get_original_data(carica_dati(nome_file_test), dato_anomalo)))

    
    

def main():
    if len(sys.argv) < 2:
        print("Uso: script.py <path_to_received_file>")
        return

    # Il percorso del file ricevuto dal server FTP
    received_file_path = sys.argv[1]

    # Carica il modello
    clf = joblib.load('guardianflow_model.joblib')
    
    # Carica i dati dal file ricevuto
    test_data = carica_dati(received_file_path)
    test_features = extract_features(test_data)
    X_test_scaled = prepara_dati(test_features)

    # Run del modello ai
    test_modello(clf, X_test_scaled, received_file_path)

if __name__ == "__main__":
    main()