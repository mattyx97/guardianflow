import os
from dotenv import load_dotenv
import mysql.connector as MySQLdb

# Load environment variables from the .env file
load_dotenv()

# Connect to the database
connection = MySQLdb.connect(
  host= os.getenv("DB_HOST"),
  user=os.getenv("DB_USERNAME"),
  passwd= os.getenv("DB_PASSWORD"),
  db= os.getenv("DB_NAME"),
  autocommit = True,
  ssl_key = '/opt/mysql/ssl/client-key.pem',
  ssl_ca ='/opt/mysql/ssl/ca.pem',
  ssl_cert = '/opt/mysql/ssl/client-cert.pem',
  
)

try:
    # Create a cursor to interact with the database
    cursor = connection.cursor()

    # Execute "SELECT table_name FROM information_schema.tables" query
    cursor.execute("SELECT Test FROM guardianflow")

    # Fetch all the rows
    tables = cursor.fetchall()

    # Print out the tables
    print("Tables in the database:")
    for table in tables:
        print(table[0])

except psycopg2.Error as e:
    print("PostgreSQL Error:", e)

finally:
    # Close the cursor and connection
    cursor.close()
    connection.close()
