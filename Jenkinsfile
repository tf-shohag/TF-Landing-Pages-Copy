pipeline {
    agent any
    tools {
        nodejs "node" // Ensure the Node.js tool is configured in Jenkins
    }
    stages {
        stage("Install") {
            steps {
                echo "Present Directory: $PWD"
                script {
                    // Install dependencies with legacy-peer-deps flag to avoid errors
                    sh "npm config set legacy-peer-deps true"
                    sh "npm install"
                }
            }
        }

        stage("Start Development Server") {
            steps {
                echo "Starting the development server"
                script {
                    // Run development server (adjust as needed for your setup)
                    sh "npm run dev" // or yarn dev / pnpm dev / bun dev depending on your setup
                }
            }
        }

        stage("Build") {
            steps {
                echo "Building frontend"
                script {
                    // Run build process
                    sh "npm run build"
                }
            }
        }

        stage('Deploy Frontend Using PM2') {
            steps {
                echo "Deploying frontend using PM2"
                script {
                    // Restart or start the PM2 process
                    sh 'pm2 restart TF_Landing_Pages || pm2 start npm --name "TF_Landing_Pages" -- start'
                }
            }
        }

        stage("Nginx Restart") {
            steps {
                echo "Restarting Nginx"
                script {
                    // Restart Nginx service
                    sh "sudo systemctl restart nginx.service"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed.'
        }
    }
}
