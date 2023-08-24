pipeline {
    agent any
    tools {
        nodejs 'node18.14.1'
    }
    stages {
        stage ('Get Commit Detail') {
            steps {
                script {
                    sh (script: 'git log -1 --pretty=%B ${GIT_COMMIT}', returnStdout: true).trim()
                    sh (script: 'git log -1 --pretty=%cn ${GIT_COMMIT}', returnStdout: true).trim()
                    sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                }
            }
        }
        stage ('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
        stage ('Unit Test') {
            steps {
                sh 'TZ=Asia/Bangkok yarn test'
            }
        }
    }
}