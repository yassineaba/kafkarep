my_project/
│
├── node_modules/                # Node.js dependencies
├── public/                      # Static files for frontend
│   ├── about.html
│   ├── configurer.html
│   ├── configurer.js
│   ├── contact.html
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── style.css
├── kafka/                       # Kafka-related scripts
│   ├── kafkaProducer.py
│   └── kafkaConsumer.py
├── server/                      # FastAPI application
│   ├── mongodb.py
│   ├── mysql.py
│   └── main.py
├── scripts/                     # Testing scripts (for databases)
│   ├── test_mongodb.js
│   └── test_mysql.js
├── .env                         # Environment variables
├── package-lock.json            # Node.js lock file
├── package.json                 # Node.js dependencies
└── requirements.txt             # Python dependencies


how to install and use kafka/zookeeper : before (make sure to put the kafka in C:\)
With the Kafka directory moved to C:\kafka_2.13-3.8.0, you can use the following commands to start Zookeeper and Kafka. Make sure to open Command Prompt for these commands.

1. Start Zookeeper
Open Command Prompt and navigate to the Kafka directory:

sh
Copier le code
cd C:\kafka_2.13-3.8.0
Then, start Zookeeper with:

sh
Copier le code
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
2. Start Kafka
Open another Command Prompt window (keeping Zookeeper running in the first window) and navigate to the Kafka directory:

sh
Copier le code
cd C:\kafka_2.13-3.8.0
Then, start Kafka with:

sh
Copier le code
.\bin\windows\kafka-server-start.bat .\config\server.properties
Verifying Installation
Zookeeper: In the Command Prompt window where you started Zookeeper, you should see log output indicating that Zookeeper has started. Look for messages about Zookeeper starting and listening on port 2181.

Kafka: In the Command Prompt window where you started Kafka, you should see log output indicating that Kafka is starting and connecting to Zookeeper. Look for messages about Kafka starting and listening on port 9092.

Troubleshooting
Check Ports: Ensure that the default ports (2181 for Zookeeper and 9092 for Kafka) are not being used by other applications.

sh
Copier le code
netstat -an | findstr 2181
netstat -an | findstr 9092
Environment Variables: Optionally, you can set environment variables for convenience:

sh
Copier le code
set KAFKA_HOME=C:\kafka_2.13-3.8.0
And use them in your commands:

sh
Copier le code
%KAFKA_HOME%\bin\windows\zookeeper-server-start.bat %KAFKA_HOME%\config\zookeeper.properties
sh
Copier le code
%KAFKA_HOME%\bin\windows\kafka-server-start.bat %KAFKA_HOME%\config\server.properties
By following these updated commands, you should be able to successfully start Zookeeper and Kafka on your Windows system.


chaque user a une instance dans le serveur 


voir les usecase de manufacturing dans le fichier partagé (cahier de chaarge)