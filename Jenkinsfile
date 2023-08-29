pipeline {
    agent any
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
        stage ('Build') {
            steps {
                echo 'building states'
                nodejs('Node-18.14.1') {
                    sh 'yarn install'
                }
            }
        }
        stage ('Unit Test') {
            steps {
                echo 'running unit tests'
                sh 'yarn test'
            }
        }
    }
}