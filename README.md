# e2e-assignment

This repository contains e2e Test Engineer assignment.

## Getting started

After cloning this repo run `npm install`.

To start server run: 

`npm start`

### Cypress

To open cypress run:

`npm run cypress:open`

To run cypress run:

`npm run cypress:run`

### Protractor

To install Protractor run:

 `npm install -g protractor`

Make sure you have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed to run the standalone Selenium Server.
You can check this by running: 

`java --version`

To install server run:

`webdriver-manager update`

To run protractor run:

 `npm run protractor`
## Specs

In this assignment we would like you to test the flow of the application.

We have 3 steps: activities, sumInsured inventory, high care or checkout.
To determine whenever user should go to high care or checkout depends on below:

### Activity step
- on the activity step you should be able to select activities with a checkbox, one or more of these six:

    - sector: **e-commerce**
        - kayak webshop
        - electronics webshop
        - flowers webshop

    - sector: **IT**
        - software development
        - UX design
        - IT consultancy

- if no activity is selected and you want to continue, show error message: “No activity can lead to health problems“

### Inventory step

- On the inventory step you’ll fill in how much your stuff is worth. If it exceeds 10.000.000 euros, show the error message: “Whoah, calm down Scrooge McDuck”
- if it’s less than 1000, show the error: “You need to have more stuff to run your business, stupid”
- Otherwise, you can continue to step 3

 ### Last step: High care or Checkout
- In step 3, you should:
    - go to the high care page if:
        - you have selected more than 4 activities
        - if you have selected an activity in sector **E-commerce** and your sumInsured is more than **2.000.000**
        - if you have selected an activity in sector **IT** and your sumInsured is more than **500.000**
    - otherwise, go to the checkout

Feel free to modify the base code if needed.

Test files for the assignment:
- using [cypress](/cypress/e2e/flow.js).
- using [protractor](/protractor/e2e/flow.js).