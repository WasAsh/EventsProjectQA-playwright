pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS' 
    }

    parameters {
        choice(
            name: 'ENV',
            choices: ['development', 'staging', 'production'],
            description: 'Select target environment'
        )

        choice(
            name: 'BROWSER',
            choices: ['all','chromium', 'firefox', 'webkit'],
            description: 'Select browser'
        )

        choice(
            name: 'SUITE',
            choices: ['all','smoke', 'regression', 'sanity'],
            description: 'Select test suite'
        )
    }    
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                bat 'npm ci' 
                
                echo 'Installing Playwright Browsers...'
                bat 'npx playwright install --with-deps'
            }
        }
        
        stage('Execute Playwright Tests') {
            steps {
                script {
                    def testCommand = "npx cross-env TEST_ENV=${params.ENV} npx playwright test"
                    if (params.BROWSER != 'all') {
                        testCommand += " --browser=${params.BROWSER}"
                    }
                    if (params.SUITE != 'all') {
                        testCommand += " --grep=@${params.SUITE}"
                    }
                    bat testCommand
                }
            }
        }
        stage('Display configuration') {
            steps {
                echo "Selected Environment: ${params.ENV}"
                echo "Selected Browser: ${params.BROWSER}"
                echo "Selected Test Suite: ${params.SUITE}"
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