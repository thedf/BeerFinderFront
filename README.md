# What's included ?

As soon as the user finishes writing a name or part of a name in the search box,the results are displayed below.
The results are cards about different beers and are paginated by Infinite Scroll; meaning when you reach the end and more beers are available they will be loaded from the backend.
The user doesn't have to click ENTER or click any button for the search to start.
When the user clicks on a Beer Card, a side Report will show up and will include
the full description, full image and more details about the Beer.

# Answer to the question ?

We can definetly avoid triggring the 1req/s limit by using a rotating proxy in the requests in the backend; Because the documentation clearly states that the Rate Limiting is related to the IP.
Or we can try to avoid the rate limit by caching responses in Clients' browsers, saving the results of the api calls in an internal Database and Making a Queing system for Requests to the API in the backend.

# How to run ?

First, make sure you clone te Backend repository and follow the running instructions for the backend. Then, clone this repository, cd into the project directory, so you can run:

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
