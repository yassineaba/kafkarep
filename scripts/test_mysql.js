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

def test_mysql():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()
    cursor.execute("INSERT INTO sensor_data (timestamp, sensor_type, value) VALUES (%s, %s, %s)",
                   ("2024-08-23T00:00:00Z", "temperature", 25.0))
    conn.commit()
    cursor.close()
    conn.close()
    print("MySQL test passed")

if __name__ == "__main__":
    test_mysql()
