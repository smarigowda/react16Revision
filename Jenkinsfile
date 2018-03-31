pipeline {
  agent any
  stages {
    stage('Stage One') {
      steps {
        echo 'Hello world! Testing Jenkins Pipeline Test 19'
        checkout scm
	    sh"""#!/bin/bash -l
           nvm use v8.10.0
           npm install
           npm run build
           CI=true npm test -- --coverage
        """
      }
    }
  }
}