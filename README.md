# attribute-mapper

This is a service to map attributes of youtube, instagram and facebook generic attribute.

## Directory Structure of the project

```
.
├── Readme.md
├── config
│   ├── connection.js
│   └── env
│       ├── default.json
│       └── dev.json
├── package-lock.json
├── package.json
├── server.js
└── src
    ├── controllers
    │
    ├── models
    │   
    ├── policies
    │   
    ├── services
    │   
    ├── test
    └── utilities
```

### server.js

This file is the entry point of our application all the express middleware are set here and all the routes are also loaded from this file. The server is started from this file.

### package.json

All the information regarding the application such as name of application, the description, version, scripts required for development, testing, and deployment of the application is available in `package.json` file. All the dependency management is done in this file.

### config

This directory contains all the application configuration, this includes connections to database, all the configuration json consisting of environment based application properties.

### coverage

This directory will contain coverage reports of unit test cases, it is auto generated directory by library [nyc](https://www.npmjs.com/package/nyc) for coverage reports. For tutorial on how to generate coverage reports check [here](https://istanbul.js.org/docs/tutorials/) nyc is cli interface for istanbul library for test coverages.

### public

This directory will contain all the static assets such as images, icons, files etc.

### src

This directory contains all the important source code of our application it has sub-directories viz. controllers, policies, services.

### controllers

This directory will have all the code for controllers and is not supposed to contain any business logic or request validations.

### policies

This can also be referred as validator(or interceptors), this directory will contain all policy(validation) files having logic to validate the API request to the server and either respond back or hand over the control to controller.

### services

This directory will contain the files with all the business logic.

### test

This directory will contain all the unit test cases and will have separate directories for unit test cases of controllers, services and helpers(If required). The `resources` directory in here consists of dummy request stubs for testing different scenarios.

### utilities

This directory will contain all the utilities required for this application viz. logger, centralized api calling function, data manipulation functions etc.

## Scripts

### Test

```
npm run test
```

### Test case with coverage reports

```
npm run test-with-coverage
```

### Start application for development

In order to execute this skeleton make sure your mongodb instance is up and running

```
npm run start
```

### Start application for production

```
npm run prod
```

This structure mostly covers different layers of a nodejs backend application, all suggestions,edits to document and PRs(with proper commit messages only) are welcome !!
