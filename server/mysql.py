import mysql.connector
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

db_config = {
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD'),
    'host': os.getenv('DB_HOST'),
    'database': os.getenv('DB_NAME'),
}

def get_connection():
    return mysql.connector.connect(**db_config)
