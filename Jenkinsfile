pipeline {
    agent any

    stages {
        stage('Checkout Repository') {
            steps {
                // Checkout branch main secara eksplisit
                git branch: 'main', url: 'https://github.com/irma0412/Full-Project-API-Testing-Reqres'
            }
        }

        stage('Process Testplan') {
            steps {
                echo 'Processing 1. Testplan...'
                // Tambahkan perintah jika perlu memproses file testplan
            }
        }

        stage('Process Testcase') {
            steps {
                echo 'Processing 2. Testcase...'
                // Tambahkan perintah jika perlu memproses testcase
            }
        }

        stage('Run Postman API Tests') {
            steps {
                // Jalankan Postman collection dengan newman + HTML report
                sh 'newman run "3. Manual Test Postman/API_postman_collection.json" -e "3. Manual Test Postman/env_postman.json" -r cli,htmlextra --reporter-htmlextra-export "3. Manual Test Postman/newman/report.html"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
    }
}
