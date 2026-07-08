pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' 
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                bat 'npm ci' // Use 'sh' if you are on Mac/Linux
                
                echo 'Installing Playwright Browsers...'
                bat 'npx playwright install --with-deps'
            }
        }
        
        stage('Execute Playwright Tests') {
            steps {
                echo 'Running Playwright Tests...'
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npx playwright test'
                }
            }
        }
    }
    
    post {
        always {
            echo 'Publishing Playwright Test Report...'
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report',
                reportTitles: 'Playwright Test Results'
            ])
        }
    }
}