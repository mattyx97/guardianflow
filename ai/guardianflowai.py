import json
import pandas as pd
import hashlib
from sklearn.ensemble import IsolationForest
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report



# Funzione per convertire una lista in hash
def hash_list(lst):
    return [hashlib.sha256(str(value).encode('utf-8')).hexdigest() if isinstance(value, str) else value
            for value in lst]

# Carica i dati JSON relativi al traffico normale e malevolo
def load_and_hash_json(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    # Converti le stringhe in hash per ciascuna lista nel JSON
    hashed_data = {key: hash_list(value) if isinstance(value, list) else value
                   for key, value in data.items()}

    return pd.DataFrame(hashed_data)

# Carica i dati JSON relativi al traffico normale e malevolo, convertendo le stringhe in hash
normal_data = load_and_hash_json('normal_traffic.json')
malicious_data = load_and_hash_json('malicious_traffic.json')

# Aggiungi una colonna 'label' per indicare se il traffico è normale (0) o malevolo (1)
normal_data['label'] = 0
malicious_data['label'] = 1

# Unisci i dati in un unico DataFrame
all_data = pd.concat([normal_data, malicious_data], ignore_index=True)

# Seleziona le colonne rilevanti per l'addestramento del modello
features = all_data.drop('label', axis=1)

# Dividi i dati in set di addestramento e set di test
X_train, X_test = train_test_split(features, test_size=0.2, random_state=42)

# Addestra l'Isolation Forest
model = IsolationForest(contamination=0.1)  # Modifica la contaminazione in base alle tue esigenze
model.fit(X_train)

# Valuta il modello
y_pred = model.predict(X_test)
print(classification_report(X_test, y_pred))

# Esempio di utilizzo del modello su nuovi dati, convertendo le stringhe in hash
new_data = load_and_hash_json('new_data.json')
predictions = model.predict(new_data)

# Analizza i risultati delle previsioni sui nuovi dati
for data_point, prediction in zip(new_data, predictions):
    if prediction == -1:
        print(f"Anomalia rilevata: {data_point}")
