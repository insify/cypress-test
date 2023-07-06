# e2e-assignment

This repository contains e2e Testing Engineer assignment.

## Getting started

After cloning this repo run `npm install`.

To start server run `npm start`.

To open cypress run `npm run cypress:open`.

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
- if it’s less than 1000, show the error: “You need to have more stuff to run your business”
- Otherwise, you can continue to step 3

 ### Last step: High care or Checkout
- In step 3, you should:
    - go to the high care page if:
        - you have selected more than 4 activities
        - if you have selected an activity in sector **E-commerce** and your sumInsured is more than **2.000.000**
        - if you have selected an activity in sector **IT** and your sumInsured is more than **500.000**
    - otherwise, go to the checkout

Feel free to modify the base code if needed.

- Test file for the assignment is [here](/cypress/e2e/flow.js).

You are allowed to use documentation and search for solutions in the internet.