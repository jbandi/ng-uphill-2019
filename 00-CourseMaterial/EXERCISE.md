# Exercises Angular

## Exercise 1: Creating an Angular App with the Angular CLI

### 1.1 Creating the App
	
Create a new Angular application (you need `@angular/cli` installed globally, see preparations):

	ng new awesome-app
	
Inspect the project that has been created. Try to understand the setup (where is the actual source code, where are the artifacts for deployment ...)

### 1.2 Running the App

Serving the app:

	cd awesome-app
	npm start
	
Navigate a Chrome or Firefox to `http://localhost:4200/`. Inspect the app. Open the browser developer tools and inspect the resources the browser actually loads over the network.


### 1.3 Debugging the App

Debug the app in Chrome:

- Open developer tools
- Open the sources tab
- Open the component sources: Hit Ctrl-P and type 'app.component.ts'
- Set a breakpoint in the constructor

Can you change the title of the component through the debugger?  
Optional: Can you debug in another browser?


### 1.4 Running the App in Internet Explorer

Navigate Internet Explorer to `http://localhost:4200/`. 
Find the difference beween loading the App in Chrome and Internet Explorer. Use the network tab of the developer tools to inspect the scripts that are loaded ...

### 1.5 Creating a Production Build

Create the production artifacts:

	npm run build --prod 
	
Inspect the contents of `dist`.  
The content of `dist` can be served with any webserver.  
We can use `serve` as a simple webserver:

	serve dist
	
Use the network tab of the developer tools to inspect the scripts that are loaded. What are the differences to the development build?


Note you can also serve a production build like this:

	ng serve -prod
	

### 1.6 Running the Tests (optional)

Execute the tests:

	npm run test
	
Inspect the tests in `src/app/app.component.spec.ts`.  
Modify a test so that it fails.  
Can you debug the tests?  
Can you run a single test?

Run the end-to-end tests:

	npm run e2e
	
Inspect the test in `e2e/app.e2e-spec.ts`.	



## Exercise 2: Creating your first Component

In the project directory from exercise 1:

	ng generate component hello
	
- Inspect the generated sources/changes.  
- Extend the app so that this new "hello"-component is used.
- Modify the component to display "Hello World" in the browser.  
- (optional) Write a test that checks for this behaviour.  
- (optional) Run the tests again ...  
- (optional) Extend the test in `app.component.spec.ts` so that it checks that the new component is rendered as a child component.

- Change the `hello`-Component: It should have a input where you can type your name and below the input a "Greeting" with your name should be displayed.
- Try to debug by stepping into the "Augury" chrome extension
- (optional) Extend the test for the `hello`-Component so that this behaviour is checked.
- (optional) Write a end-to-end test that checks this behaviour. (Hint: `npm run e2e`, `./e2e/app.e2e-spec.ts`

### Hints
Have a look at `10-basic-constructs/src/app/01-basics/01-databinding` to see an example of data-binding.

If you can't work in your local development environement, you can fork the following StackBlitz:  
[https://stackblitz.com/github/jbandi/ng01-starter](https://stackblitz.com/github/jbandi/ng01-starter)



## Exercise 3: Component Architecture
Begin with the project `40-ToDoApp/03-Simple-ToDo-components-exercise`.  
Start the application:

	npm install
	npm start

The project gives you a simple ToDo application. 
Note: The component uses the `ToDoService` to store the todo items in the local storage of the browser.

Inspect the application: 
- There are two top-level screen components: `overview` and `done`
- The `overview` component uses the `new-todo` component

### 3.1 Extract a list component
Extract a reusable `todo-list` component from the `overview` component.

The logic for managing should remain in the `overview` component. The new component should be a simple presentation component.

### 3.2 Re-use the list component 
Use the `todo-list` component on the `done` screen to display all the completed todo-items.

The logic for managing the todo-items should be implememented in the `done` component. 

### Hints
Have a look at `10-basic-constructs/src/app/01-basics/03-nested-components` to see an example of parent-child components and `@Input` and `@Output` properties.

If you can't work in your lokal development environement, you can fork the following StackBlitz:  
[https://stackblitz.com/github/jbandi/ng02-todo-component-exercise/](https://stackblitz.com/github/jbandi/ng02-todo-component-exercise/)



## Exercise 4: Backend Access

The directory `40-ToDoApp/_server` contains a simple API-Server implementing basic CRUD functionality for our ToDo application.
Start the server with the following commands:

	npm install #just once
	npm start
	
You should now get an array with one todo item at the url: `http://localhost:3456/todos`.

Your task is now to access this backend API from the ToDo application:
- When the application is loaded, all the todo items should be loaded from the server
- When a todo item is added, it should be saved to the server
- When a todo item is completed it should be updated on the server
- When a todo item is deleted, it should be deleted from the server.

Start from `40-ToDoApp/11-Simple-ToDo-backend-exercise`.
This project already loads the todo items from the server when the application is loaded.


The API implemented by the REST-Endpoint is described in the table below:


HTTP-Method   | URL (example) 			      	| Request-Body
------------- | ------------- 			      	|-------------
GET	    	  | http://localhost:3456/todos   	|
GET	    	  | http://localhost:3456/todos/1 	|
POST		  | http://localhost:3456/todos		| { "title": "Test", "completed": false}
PUT		 	  | http://localhost:3456/todos/1	| { "title": "Test 2", "completed": true}
DELETE		  | http://localhost:3456/todos/1	| 

Note that all responses are wrapped in a response object with a `data` property.
This is a typical security measure of JSON endpoints. See: http://stackoverflow.com/questions/3503102/what-are-top-level-json-arrays-and-why-are-they-a-security-risk


### Hints
Have a look at `10-basic-constructs/src/app/03-BackendAccess/02-backend-crud` to see an implementation of how to access the todo item API endpoint.

If you can't work in your local development environement, you can fork the following StackBlitz:  
[https://stackblitz.com/github/jbandi/ng03-todo-backend-exercise](https://stackblitz.com/github/jbandi/ng03-todo-backend-exercise)
