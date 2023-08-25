pipeline {
    agent {
        docker {
            image 'node:12.16.1'
            args '-u root'
        }
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
                echo 'Install Dependencies'
                nodejs('node')
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