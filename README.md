# A Random repo to test deployment

The repository contains a simple single page ReactJS application inside ```/React_app```. This app is created to test out various deployment options and optimization. Feel free to try it out, and have fun playing with it

## Installation

### Using NPM

Once we make sure Node and Npm is installed and updated in the local environment. We can navigate to the ```/React_app``` directory, and install the required packages by ```npm install```. Finally we can run the development server using ```npm run dev```

To serve the production build, ```npm run build```, and then ```serve -s build```, provided serve is installed globally using ```npm install -g serve```

### Using Docker

If docker compose is installed in the system. The command ```docker-compose up``` from ```/deployment_files``` directory does the work

Alternatively in an imperative way, from ```/React_app``` directory:

- Build the docker image using ```docker image build -t simple-image .```
- Run an interactive container using ```docker run -it --name simple-container -p 3000:3000 simple-image```