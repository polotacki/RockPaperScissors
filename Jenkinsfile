pipeline {
  agent any
environment {
    DOCKERHUB_CREDENTIALS = credentials('Dockerhub')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t polotacki/rockpaperscissors .'
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push') {
      steps {
        sh 'docker push melodick/rps:latest'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
