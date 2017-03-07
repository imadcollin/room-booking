# APEGROUP DASHBOARD

This  branch contains the feature where the user can select rooms and book them.
The new feature shall allow the user to check all avaliable rooms and all boooked rooms.
One advantage is to show all facilities within the company and people status.

## Getting started
1. Download and install [NodeJS](https://nodejs.org) (>=v6.0.0) if you don't have it already.

2. Clone the source code from Github. In the terminal type:

    ```
    git clone git@github.com:apegroup/apegroup-dashboard-web.git
    ```

## Dependencies
1. To install all the needed dependencies use the terminal to `cd` into the project folder and type:

    ```
    npm install
    ```

## Development
1. Start the server.

    ```
    npm start
    ```

2. Start Gulp.

    ```
    npm run gulp start --debug --dev|stg|prd
    ```

3. Start Browser Sync. This will open the project in the Google Chrome browser.

    ```
    npm run gulp sync
    ```

## Test
1. To run all tests.

    ```
    npm test
    ```

2. Only test the client code.

    ```
    npm run test:client
    ```

3. Only test the server code.

    ```
    npm run test:server
    ```

## View the project
Browse to `http://localhost:4000` (if Browser Sync is running ).
Browser Sync will automatically refresh the webpage when changes in the files are detected.

## Deployment
TODO

## Directory structure
* `build` - contains all transpiled resources.
* `gulp` - contains all gulp plugins and tasks to build the project.
* `node_modules` - contains all npm packages.
* `server` - contains a lightweight Node.js server.
* `src` - contains all resources.

