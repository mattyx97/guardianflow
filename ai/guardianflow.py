import json
import hashlib

# Nome del file JSON da leggere
nome_file_json = "malicious_traffic.json"

# Campi specifici da estrarre
campi_desiderati = ["_source,layers,eth,eth.dst",  "_source,layers,eth,eth.dst","_source,layers,eth,eth.dst_tree,eth.addr","_source,layers,eth,eth.src","_source,layers,ip,ip.src","_source,layers,ip,ip.dst","_source,layers,arp,arp.src.hw_mac","_source,layers,arp,arp.dst.hw_mac","_source,layers,arp,arp.dst.proto_ipv4","_source,layers,tcp,tcp.dstport","_source,layers,tcp,tcp.flags_tree,tcp.flags.reset","_source,layers,tcp,tcp.flags_tree,tcp.flags.syn"]

try:
    with open(nome_file_json, "r") as file:
        dati = json.load(file)
        for oggetto in dati:
            print("--------------------------------------------------")
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
                    # Converti la stringa in hash utilizzando SHA-1 e poi in float se non è già un float
                    if isinstance(valore, str):
                        valore = float(int(hashlib.sha1(valore.encode('utf-8')).hexdigest(), 16))
                    elif not isinstance(valore, float):
                        print(f"Il valore non è né una stringa né un float: {valore}")
                        break

                    print(f"{campo}: {valore}")

except FileNotFoundError:
    print(f"File '{nome_file_json}' non trovato.")
except json.JSONDecodeError:
    print(f"Errore nella decodifica del file JSON.")
