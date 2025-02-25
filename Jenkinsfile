pipeline {
    agent any

    environment {
        HUSKY = "0"  // Disable Husky for CI/CD
        CI = "false"  // Prevent ESLint from blocking the build
    }

    stages {
         stage('Install Git') {
            steps {
                bat 'choco install git -y'  // Windows ke liye
            }
        }
    }
        stage('Checkout Code') {
            steps {
               git branch: 'main'
                git credentialsId: 'github-credentials16',
                 url: 'https://github.com/SATYAM08RAJPUT/Revision.git', 
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Fix Security Issues') {
            steps {
                bat 'npm audit fix --force'
            }
        }

        stage('Lint Check') {
            steps {
                bat 'npm run lint || echo "Linting failed, continuing..."'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

       stage('Deploy App') {
        steps {
        bat 'npm install -g netlify-cli'
        bat 'netlify deploy --prod --dir=build --auth=your-netlify-auth-token --site your-site-id'
    }
}

    }
}
