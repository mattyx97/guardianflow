from pyftpdlib.authorizers import DummyAuthorizer
from pyftpdlib.handlers import FTPHandler
from pyftpdlib.servers import FTPServer
import subprocess

class CustomFTPHandler(FTPHandler):
    def on_file_received(self, file):
        # Chiamata quando un file viene completamente ricevuto
        print(f"File ricevuto: {file}")
        try:
            # Esegui lo script Python
            subprocess.run(["python3", "/Users/mattiaguariglia/Desktop/Guardian Flow/guardianflow/ai/guardianflowai-run.py", file], check=True)
        except subprocess.CalledProcessError as e:
            print(f"Errore nell'esecuzione dello script: {e}")

def main():
    authorizer = DummyAuthorizer()
    authorizer.add_anonymous("/Users/mattiaguariglia/Desktop/Guardian Flow/guardianflow/file", perm='elradfmw')

    handler = CustomFTPHandler
    handler.authorizer = authorizer

    address = ('localhost', 21)
    server = FTPServer(address, handler)
    server.serve_forever()

if __name__ == "__main__":
    main()
