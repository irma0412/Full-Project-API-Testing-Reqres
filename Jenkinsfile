pipeline {
    agent any

    environment {
        PATH = "${env.PATH};C:\\Users\\IRMA SURYANI\\AppData\\Roaming\\npm"
    }

    stages {
        // stage('Install Dependencies') {
        //     steps {
        //         bat 'npm install -g newman newman-reporter-htmlextra'
        //     }
        // }

        stage('Run Postman API Tests') {
            steps {
                bat 'newman run "3. Manual Test Postman/API_postman_collection.json" -e "3. Manual Test Postman/env_postman.json" -r cli,htmlextra --reporter-htmlextra-export "3. Manual Test Postman/newman/report.html"'
            }
        }

        stage('Run Node.js Automated Tests') {
            steps {
                echo 'Here you can add your Node.js automated test commands'
            }
        }

        stage('Run JMeter Performance Test') {
            steps {
                echo 'Here you can add your JMeter performance test commands'
            }
        }

        stage('Generate Final Report') {
            steps {
                echo 'Here you can generate your final report'
            }
        }
    }
}
