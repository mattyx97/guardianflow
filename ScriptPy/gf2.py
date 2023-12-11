from dotenv import load_dotenv

import json
import hashlib
import numpy as np
from sklearn.ensemble import IsolationForest
from sklearn.preprocessing import StandardScaler

# Function to extract features and convert them into a format suitable for Isolation Forest
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

# Nome dei file JSON da leggere
nome_file_normale = "normal_traffic.json"
nome_file_malicious = "malicious_traffic.json"

# Leggi i dati dai file JSON
try:
    with open(nome_file_normale, "r") as file:
        normal_data = json.load(file)

    with open(nome_file_malicious, "r") as file:
        malicious_data = json.load(file)

except FileNotFoundError:
    print(f"File non trovato.")
except json.JSONDecodeError:
    print(f"Errore nella decodifica del file JSON.")

# Estrai le feature per il training del modello Isolation Forest
normal_features = extract_features(normal_data)
malicious_features = extract_features(malicious_data)

# Combina le feature di traffico normale e malevolo
X = normal_features + malicious_features

if not X:
    print("No features found. Check the data extraction process.")
else:
    # Normalizza o scala le feature
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # Addestra il modello Isolation Forest
    clf = IsolationForest(contamination=0.3)  # Contamination parameter can be adjusted
    clf.fit(X_scaled)

    # Esegui la predizione sui dati maliziosi
    malicious_predictions = clf.predict(X_scaled[len(normal_features):])
    contatore = 0
    for val in malicious_predictions:
        if val == -1:
            contatore += 1
            
    print(contatore)
    print(len(malicious_predictions))
