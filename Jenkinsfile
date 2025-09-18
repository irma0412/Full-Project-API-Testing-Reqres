pipeline {
    agent any

    stages {
        stage('Process Test Plan') {
            steps {
                echo 'Processing 1. Test Plan...'
            }
        }

        stage('Process Test Case') {
            steps {
                echo 'Processing 2. Test Case...'
            }
        }

        stage('Run Postman API Tests') {
            steps {
                bat 'npm install -g newman newman-reporter-htmlextra'
                bat 'newman run "3. Manual Test Postman/API_postman_collection.json" -e "3. Manual Test Postman/env_postman.json" -r cli,htmlextra --reporter-htmlextra-export "3. Manual Test Postman/newman/report.html"'
            }
        }

        stage('Run Node.js Automated Tests') {
            steps {
                bat 'cd "4. Auto Test Node.js" && npm install && npm test'
            }
        }

        stage('Run JMeter Performance Test') {
            steps {
                echo 'Run your JMeter test here if needed'
            }
        }

        stage('Generate Final Report') {
            steps {
                echo 'Generate or process 6. Final Report...'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
