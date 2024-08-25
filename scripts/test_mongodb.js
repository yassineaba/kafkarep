from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGO_URI)
db = client.sensor_db

def test_mongodb():
    collection = db.sensor_data
    result = collection.insert_one({"timestamp": "2024-08-23T00:00:00Z", "sensor_type": "temperature", "value": 25.0})
    assert result.acknowledged
    print("MongoDB test passed")

if __name__ == "__main__":
    test_mongodb()
