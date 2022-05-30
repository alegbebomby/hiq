### How to run ###

Backend

```
cd backend
yarn && yarn start:dev
```
The application run at port: 3010
upload endpoint : POST http://localhost:3010/upload

Backend

```
cd frontend
yarn && yarn start 

```
Upload any file



### Questions ###
Please answer these questions in a markdown file called `Answers.md`.

1. How much time did you end up spending on this coding test?
    It took me 4 hours to build both backend and frontend without writing tests
    - 1 hour to write the backend 
    - 2 hours for frontend
    - 1 hour for writing backend tests and improvements

2. Explain why you chose the code structure(s) you used in your solution.
    Code structure
    Backend is built with Nestjs . this is a powerful enterpise framework for nodejs application. it is built with typescript in mind and also unit and integration test available.
    I choose to build the web API separately because it is more scalable and efficient to manage the backend api separated from the frontend. it can also be be easily containerized or migrate the code to serverless in the future.
    Also since the backend is loosely coupled from the frontend it will be easily testable e.g performance, unit and integration tests

    Frontend is built with reactjs with chakra-UI. this is a minimalist framework that allows you to build rapid protoype and production ready applications in no time
    Reactjs this is a component based framework to allow us build the frontend UI rapidly. I choose react because it is widely used and since our application is component based we can easily port the application to other platform like mobile via react-native
    Chakra UI - I need a UI framework so I dont spent most of my time designing the UI. Chakra us easy to use


3. What would you add to your solution if you had more time? This question is especially important if you did not spend much time on the coding test - use this as an opportunity to explain what your solution is missing.
    backend
    1. File streaming: our application  cannot handle a very large file. I will love to optimize for large files
    2. Integrate file storage e.g S3 bucket so we can persist the file incase we want to review the file in the future 
    3. Integration test to test the api end to end 
    4. Security improvements rate limiting, cors and  authentication and authorization

    frontend
    1. I will like to highlight the most words in  the previous input text when displaying and highlight the changes as well as
    2. Unit test on the frontend
    3. Improve the experience

4. What did you think of this recruitment test?
I think its a good test. I like that the developer can choose on how to solve the problem not necessarily restricted by technology