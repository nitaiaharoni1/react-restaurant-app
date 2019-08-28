# Mama's Restaurant - React ecommerce website
Mama's Restaurant is an ecommerce website built using React, Redux integrated with Node.js and Express backend.

A demo for the Website App is available [here](https://mamas-restaurant-app.herokuapp.com/).

![mamas restaurant](website.gif "mamas restaurant")

## Project Questions

#### What are you selling?
* Our store is basically a restaurant and we sell food through delivery to the customer's house.
#### What additional page did you add? How to operate them?
Home page `/home`:
    * Welcome home page.
    * You can scroll and see pictures with effect, and get information about the restaurant.
    * Each of the pages in the app is accompanied by a navbar that lets you navigate between the different app pages. The navbar also contains a cart button which is used as a pop-up on mouseover, Above it is a number showing the quantity of products in the cart.

* Deliveries page `/delivery`:
    * You can add a product to the cart
    * You can use search input to search for a specific product by description, title or price
    
* Gallery page `/gallery`:
    * Image gallery received from the server (simulates access to the database)
    
* Menu pages `/menu`:
    * Two menu pages, render the objects iteratively.
    
* Admin page `/admin`:
    * An admin page can only be accessed if an admin user is logged in.
    * The page that allows to view the database in json format.
    * You can click on the arrows to view specific user's data.
    
* Login page `/login`:
    * You can enter email/username and password to login and receive a user data.
    * To place a new order, you must login to the site.
    
* Signup page `/signup`:
    * You can register a new user for the site.
    * All fields must be entered in the right format to click on the Subscribe button.
    
* Cart page `/cart`:
    * The selected products will appear in the cart.
    * Products for a signed-in user will be stored in a database so that a user can see them even after the site is refreshed or exited.
    * You can add a quantity to a specific product or delete it from the cart.
    * You can see a summary of the quantity and cost of the products
    
* Checkout page `/chekout`:
    * This page shows user information includes address, name, email, etc.
    * To place an order you can enter payment details in the correct format.
    
* Terms of service page `/terms`:
    * Displays the terms of use before registering for the site.
    
* Page not found page `/any other`:
    * This page will display when any route that is not defined is used.

#### What was hard to do?
* Learn to React from scratch
* Learn Bootstrap from scratch
* Learn Redux framework from scratch (Working in a very non-intuitive way I must say)
* Learn Jest testing framework from scratch
* Integrate with Node Express and save the data (And deployment to Heroku that I wanted to do to allow my site to be public).
* In general, coding the project took me around 100 hours (Which in itself is difficult).

#### Who is your partner name and id?
* Me: `Nitai Aharoni 203626742`
* Partner: `Nadav Lotan 312346406`

#### Specify all the different route your app supports
* Update user's items in db - POST `/api/items/:email/:title/:action`
    
* Authenticate user with cookie on lunching the app and getting user's data - GET `/api/items/:email/:title/:action`
    
* Admin get all database - GET `/api/admin/data/:email`
        
* Login user - GET `/api/user/login/:email/:password/:remember`

* Logout user - POST `/api/user/logout`

* Signup new user - POST `/api/user/signup`
   
* Post a new order - POST `/api/order/new/:email`
      
* Get gallery images (Simulates database access) - GET `/api/gallery`
   
* Serves react client static files - GET `*`
    
#### How did you make your store secured?
* Validating all forms
* Validating admin user before showing Admin page
* Validating requests on the server

#### Did you implement the store using react.js? 
Yes, React and Redux

## Prerequisites
1. Git
2. Node v10.16.1
3. A fork/clone of this repo

## Running locally
1. In react-restaurant-website directory run in terminal: `npm run app`
2. Open http://localhost:3000

