pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SATYAM08RAJPUT/Revision.git'
            }
        }

    stage('Install Dependencies') {
    steps {
        bat 'npm install'
    }
}

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
