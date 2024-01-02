from ftplib import FTP
import os

def invia_file_ftp(host, port, username, password, file_path, dest_path):
    # Connettiti al server FTP
    with FTP() as ftp:
        try:
            # Effettua la connessione al server
            ftp.connect(host, port)
            
            # Effettua il login (rimuovi questa riga se il server è anonimo)
            ftp.login(user=username, passwd=password)

            # Cambia la directory, se necessario
            if dest_path:
                ftp.cwd(dest_path)

            # Ottieni il nome del file da caricare
            filename = os.path.basename(file_path)

            # Carica il file
            with open(file_path, 'rb') as file:
                ftp.storbinary(f'STOR {filename}', file)
            
            print(f"File '{filename}' inviato con successo al server FTP.")
        except Exception as e:
            print(f"Errore durante l'invio del file: {e}")

# Parametri del server FTP
host = "localhost"  # Sostituisci con l'indirizzo del tuo server FTP
port = 21  # Porta FTP (default è 21)
username = ""  # Sostituisci con il tuo username o lascia vuoto per anonimo
password = ""  # Sostituisci con la tua password o lascia vuoto per anonimo

# Percorso del file da inviare e destinazione sul server FTP
file_path = "/Users/mattiaguariglia/Desktop/Guardian Flow/guardianflow/ai/http.json"  # Sostituisci con il percorso del tuo file
dest_path = ""  # Sostituisci con la destinazione sul server FTP

# Invia il file
invia_file_ftp(host, port, username, password, file_path, dest_path)
