from kafka import KafkaProducer
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

KAFKA_BROKER = os.getenv("KAFKA_BROKER")
KAFKA_TOPIC = os.getenv("KAFKA_TOPIC")

producer = KafkaProducer(
    bootstrap_servers=[KAFKA_BROKER],
    value_serializer=lambda v: json.dumps(v).encode('utf-8')
)

def send_message(message):
    producer.send(KAFKA_TOPIC, message)
    producer.flush()
