from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")
client = MongoClient(MONGO_URI)
db = client.sensor_db

def insert_sensor_data(data):
    collection = db.sensor_data
    collection.insert_one(data)

def get_sensor_data():
    collection = db.sensor_data
    return list(collection.find())
