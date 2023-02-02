pipeline {
environment {
registry = "melodick/rps"
registryCredential = 'Dockerhub'
dockerImage = ''
}
agent any
  stages {
stage('Building our image') {
steps{
script {
dockerImage = docker.build registry + ":$BUILD_NUMBER"
}
}
}
stage('Deploy our image') {
steps{
script {
docker.withRegistry( '', registryCredential ) {
dockerImage.push()
}
}
}
}
stage('Cleaning up') {
steps{
bat "docker rmi $registry:$BUILD_NUMBER"
}
}
}
}
