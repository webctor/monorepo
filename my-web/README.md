# MyWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Using Docker
I added a Dockerfile that contains the instructions to create an image for this web application. 

You build the image by running the command: 
```sh
$ docker build -t
```

Then, spin up the container once the build is done:
```sh
$ docker run -d \
    -v ${PWD}:/usr/src/app \
    -v /usr/src/app/node_modules \
    -p 4200:4200 \
    --name web-angular-container \
    web-angular
```

If you want to execute any of these commands in the container, you will need to run: 

```sh
$ docker exec -it web-angular-container ng test --watch=false
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
