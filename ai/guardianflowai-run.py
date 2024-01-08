import joblib
import numpy as np
import hashlib
import json
from sklearn.preprocessing import StandardScaler

campi_desiderati = ["_source,layers,eth,eth.dst", "_source,layers,eth,eth.dst_tree,eth.addr", "_source,layers,ip,ip.src", "_source,layers,ip,ip.dst", "_source,layers,tcp,tcp.dstport", "_source,layers,tcp,tcp.flags_tree,tcp.flags.reset", "_source,layers,tcp,tcp.flags_tree,tcp.flags.syn"]


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



def prepara_dati(X):
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(np.array(X))
    return X_scaled

def test_modello(clf, X_scaled):
    predictions = clf.predict(X_scaled)
    contatore = sum(val == -1 for val in predictions)
    print(f"Predizioni di anomalie: {contatore} su {len(predictions)}")

def main():
    # Carica il modello
    clf = joblib.load('isolation_forest_model.joblib')
    
    # Carica o definisci qui i tuoi nuovi dati per il test
    nome_file_test = "normal_traffic.json"
    test_data = carica_dati(nome_file_test)
    test_features = extract_features(test_data)
    X_test_scaled = prepara_dati(test_features)

    # Testa il modello
    test_modello(clf, X_test_scaled)

if __name__ == "__main__":
    main()