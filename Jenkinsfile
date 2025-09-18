pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                git 'https://github.com/irma0412/Full-Project-API-Testing-Reqres'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install -g newman newman-reporter-htmlextra'
            }
        }

        stage('Run Postman API Tests') {
            steps {
                sh 'newman run "3. Manual Test Postman/API_postman_collection.json" -e "3. Manual Test Postman/env_postman.json" -r cli,htmlextra --reporter-htmlextra-export "3. Manual Test Postman/newman/report.html"'
            }
        }
    }
}
