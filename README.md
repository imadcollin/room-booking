# APEGROUP DASHBOARD

This  branch contains the feature where the user can select rooms and book them.
The new feature shall allow the user to check all avaliable rooms and all boooked rooms.
One advantage is to show all facilities within the company and people status.

# Purposes
 Sitting with no project making bad feeling so this is some feature for activity wall. No required but just for free time
## Getting started
1. Download and install [NodeJS](https://nodejs.org) if you don't have it already.

2. Clone the source code from Github. In the terminal type:

 ```
git@github.com:apegroup/apegroup-booking-mini.git
```

## Dependencies
To install all the needed dependencies use the terminal to `cd` into the project folder and type:

```
npm install
```

## Development
Start the server.

```
npm start
```

Start Gulp.

```
npm run gulp start --debug --dev|stg|prd
```

Start Browser Sync. This will open the project in the Google Chrome browser.

```
npm run gulp sync
```


## Test
To run all tests.

```
 npm test
```

Only test the client code.

```
 npm run test:client
```

Only test the server code.

```
npm run test:server
```

## View the project
Browse to `http://localhost:4000` (if Browser Sync is running ).
Browser Sync will automatically refresh the webpage when changes in the files are detected.

## Deployment
TODO

## Data base
The data for this project are accessible directly via Firebase within the following link
 [Firebase](https://activitywall-d8629.firebaseio.com/)

## Directory structure
* `build` - contains all transpiled resources.
* `gulp` - contains all gulp plugins and tasks to build the project.
* `node_modules` - contains all npm packages.
* `server` - contains a lightweight Node.js server.
* `src` - contains all resources.

