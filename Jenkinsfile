pipeline {
    agent any

    environment {
        HUSKY = "0"
        CI = "false"
        NETLIFY_AUTH_TOKEN = credentials('NETLIFY_AUTH_TOKEN')  // Fetch from Jenkins credentials
        NETLIFY_SITE_ID = 'your-actual-netlify-site-id'  // Replace with your actual Site ID
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    credentialsId: 'github-credentials17', 
                    url: 'https://github.com/SATYAM08RAJPUT/Revision.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '''
                chcp 65001
                set HUSKY=0
                npm install
                '''
            }
        }

        stage('Build React App') {
            steps {
                bat '''
                set NODE_ENV=production
                npm run build
                '''
            }
        }

        stage('Deploy to Netlify') {
            steps {
                bat 'npm install -g netlify-cli'
                bat 'netlify deploy --prod --dir=build --auth="%NETLIFY_AUTH_TOKEN%" --site="%NETLIFY_SITE_ID%"'
            }
        }
    }
}
