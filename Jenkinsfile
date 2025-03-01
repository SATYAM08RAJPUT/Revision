pipeline {
    agent any

    environment {
        HUSKY = "0"
        CI = "false"
        NETLIFY_AUTH_TOKEN = credentials('Jenkin__Deployment')  // Fetch from Jenkins credentials
        NETLIFY_SITE_ID = '4aa83ac9-92e5-46c5-8955-dd0b098d75cd'  // Replace with your actual Site ID
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
                  bat 'npx netlify deploy --prod --dir=build --auth=%nfp_UX5TqRUL5iJPQTo26CvMSCyJuuQYVNNB02e8% --build "npm run build"'
                    bat 'npx netlify deploy --prod --dir=build --auth=%nfp_UX5TqRUL5iJPQTo26CvMSCyJuuQYVNNB02e8% --build "npm run build"'
                }
        }



    }
}
