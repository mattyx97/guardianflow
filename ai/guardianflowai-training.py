from dotenv import load_dotenv
import json
import joblib
import hashlib
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler

#Definizione dei campi da estrarre
campi_desiderati = ["_source,layers,eth,eth.dst", "_source,layers,eth,eth.dst_tree,eth.addr", "_source,layers,ip,ip.src", "_source,layers,ip,ip.dst", "_source,layers,tcp,tcp.dstport", "_source,layers,tcp,tcp.flags_tree,tcp.flags.reset", "_source,layers,tcp,tcp.flags_tree,tcp.flags.syn"]

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
                    print(f"Il campo '{campo}' non è presente nell'oggetto.")
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


def valuta_modello(clf, X_scaled, normal_features):
    if clf is None or X_scaled is None:
        print("Modello o dati non validi per la valutazione.")
        return

    malicious_predictions = clf.predict(X_scaled[len(normal_features):])
    contatore = sum(val == -1 for val in malicious_predictions)
    print(contatore)
    print(len(malicious_predictions))

def prepara_e_addestra_modello(X):
    if not X:
        print("No features found. Check the data extraction process.")
        return None, None

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(np.array(X))    #Standardizzazione dati
    clf = IsolationForest(contamination=0.1)
    clf.fit(X_scaled)                               #Funzione che addestra il modello su dati standardizzati
    return clf, X_scaled

def main():
    load_dotenv()
    nome_file_normale = "normal_traffic.json"
    nome_file_malicious = "malicious_traffic.json"

    #Caricamento dati ed estrazione features
    normal_data = carica_dati(nome_file_normale)
    malicious_data = carica_dati(nome_file_malicious)

    normal_features = extract_features(normal_data)
    malicious_features = extract_features(malicious_data)

    #Addestramento modello post-estrazione
    X = normal_features + malicious_features
    clf, X_scaled = prepara_e_addestra_modello(X)

    if clf is not None and X_scaled is not None:
        valuta_modello(clf, X_scaled, normal_features)
        joblib.dump(clf, 'guardianflow_model.joblib')

if __name__ == "__main__":
    main()
