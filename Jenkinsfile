pipeline {
    agent any

    environment {
        HUSKY = "0"
        CI = "false"
        NETLIFY_AUTH_TOKEN = 'nfp_UX5TqRUL5iJPQTo26CvMSCyJuuQYVNNB02e8'  // Fetch from Jenkins credentials
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
                bat 'npm install -g netlify-cli@latest'

                // ✅ Check if already linked, then link only if needed
                bat '''
                npx netlify status
                if %ERRORLEVEL% NEQ 0 (
                    echo Site not linked, linking now...
                    npx netlify link --id %NETLIFY_SITE_ID%
                )
                '''

                // ✅ Deploy to Netlify
                bat 'npx netlify deploy --prod --dir=build --auth %NETLIFY_AUTH_TOKEN% --json'
            }
        }
    }
}             
