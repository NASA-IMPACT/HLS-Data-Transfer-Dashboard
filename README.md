# HLS Data Transfer Dashboard React App

## Prerequisites

1. Node JS (v12.22.9)
2. NPM (v8.5.1)
3. Grafana (Ensure Grafana is up and running)


### `Steps to deploy the Dashboard`

1. Clone or pull source code from github repository: 
    ```bash
    git clone https://github.com/NASA-IMPACT/HLS-Transfer-Catalog.git
    ```
2. cd into HLS-Data-Transfer-Dashboard/Data-Transfer-ReactJS-Dashboard.
3. Update your json config file with your grafana panels iframe URL's.
4. Execute following command to install all the dependencies
    ```bash
    npm install
    ```
5. Execute following command to create the build out of source code.
    ```bash
    npm run build
    ```
6. Execute following command to install pm2 globally
    ```bash
    npm install pm2 -g
    ```
7. Execute below command to deploy the build(e.g : pm2 serve build/ 5000 --name "my-react-app").
    ```bash
    pm2 serve {path-to-build}/ {port}  --name "{name}"
    ```
8. Execute below command to see the status of the react apps
    ```bash
    pm2 list
    ```
9. Exectue below command to manage the react apps.
    ```bash
    pm2 stop/start/delete <process id/process name>
    ```
