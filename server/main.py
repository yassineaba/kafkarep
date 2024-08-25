from fastapi import FastAPI, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pydantic import BaseModel
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Database setup
DATABASE_URL = os.getenv("MYSQL_DATABASE_URL")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class SensorData(Base):
    __tablename__ = "sensor_data"
    id = Column(Integer, primary_key=True, index=True)
    timestamp = Column(String, index=True)
    sensor_type = Column(String)
    value = Column(Float)

Base.metadata.create_all(bind=engine)

# Models
class SensorDataCreate(BaseModel):
    timestamp: str
    sensor_type: str
    value: float

@app.post("/sensor-data/")
def create_sensor_data(sensor_data: SensorDataCreate, db: Session = Depends(SessionLocal)):
    db_sensor_data = SensorData(**sensor_data.dict())
    db.add(db_sensor_data)
    db.commit()
    db.refresh(db_sensor_data)
    return db_sensor_data

@app.get("/sensor-data/")
def read_sensor_data(skip: int = 0, limit: int = 10, db: Session = Depends(SessionLocal)):
    return db.query(SensorData).offset(skip).limit(limit).all()

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Authentication logic (dummy example)
    return {"access_token": "dummy_token", "token_type": "bearer"}
