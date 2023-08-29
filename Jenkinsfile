pipeline {
    agent any
    environment {
        NODE_VERSION = '18.14.1'
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
        stage ('Build') {
            steps {
                echo 'building states'
                nodejs(NODE_VERSION) {
                    sh 'yarn install'
                }
            }
        }
        stage ('Unit Test') {
            steps {
                echo 'running unit tests'
                nodejs(NODE_VERSION) {
                    sh 'yarn test'
                }
            }
        }
    }
}