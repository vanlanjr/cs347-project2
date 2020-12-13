### Project 2 Rubric Breakdown

1. You will create an app that has a coherent purpose and satisfies a personal creative itch.
- Dylan and I are passionate chefs seeking enlightenment in the art of cooking. We have always wanted break the norm and keep all of our secret recipes in a secure   database on the web that can be accessed through a secret client.

2. You will not write a to-do list management app.
- We wrote a cookbook recipe management app which is different from a to-do list management app.

3. You may work with a partner or as an individual.
- We worked as a group.

4. The code must be written by you and your partner, and any assets must be made by you and your partner or conform to their license.
- We did not use any package or code that was obtained from an outside source.

5. Your app will have both a back-end data store and web service and a front-end client.
- This is true. We have a back-end mysql database that is stored on Jason's droplet and is accessed by the client through the web service. The web service url is https://cookbook-api.jvfunweb.me:8442

6. You will create a front-end client using React’s functional components and hooks. (Do not use classes for making components.)
- Our front-end client is React based with different components. It utilizes React Routers for the components to mimimic a multi-page application.

7. The content of your client must change dynamically as the user interacts with it. (Sites with only static content generally should not be written with React.)
- Our app has the ability to add new recipes into the data store. This changes the client by adding new recipes to the list.  Existing recipes can also be edited which changes the appearance of client.

8. You will manage state in your client using Redux.
- Our client uses useSelector() and UseDispatch() from the react redux store to manage the state of the client as new recipes are added and edited.

9. The user interface of your client should follow the aesthetic and usability principles described in project 1, including clean spacing, coherent alignment, sufficient contrast, harmonious colors, and responsive design.
- The client follows the principles that are outlined in project 1. All headers and text areas are left aligned. There is also padding between the buttons so that they are clearly seperated. We also added our own favicon. The colors have contrast from the background so that they can be easily seen.  

10. You will access your web service from your client using your own calls to fetch and not through any helper library.
- This is true. Our client sends basic fetch calls to the web service's endpoints to recieve specific information. In our entire program, we do not use any helper libraries for fetch calls. 

11. You will indicate asynchronous activity to the user via the GUI. For example, while a fetch executes, you show a progress wheel.
- When loading recipes on the main page and in other fetch calls, a blue progress wheel pops up 

12. Your client must be free from all warnings and errors.
- Our client is free from all warnings and errors in the terminal when the app is started. Additionally, the html and css sheets are free from warnings and errors in the Nu HTML checker.

13. Your front-end client must be stored in a Git repository that you have shared with your instructor. On GitHub, GitLab, and Bitbucket, share with the user twodee.
-  Our front end client source code is on a Github repository

14. Your front-end client must be available through the URL https://project2.YOUR-DOMAIN-NAME. It must be served out via HTTPS over port 443. If visitors access your client through port 80, they must be redirected automatically to port 443. The configuration is very similar to that of project 1.
- This project is served out through https://project2.jvfunweb.me.  When users try to access it through port 80, they are automatically redirected to port 443.

15. Your app will store its data long-term in a relational database. There’s nothing wrong with NoSQL databases like MongoDB, but they are intentionally outlawed to align our focus and to give us more experience with relational databases. Your database need not have multiple tables.
- We store our recipes data in a mysql SQL database that is downloaded on our droplet.

16. You will provide an Express-based web service for interacting with the database. The service must only be directly accessible from your droplet, and not from outside. Use ufw to block all ports but the ones you need for SSH and your allowed web servers.
- We use an Express-based web service to interact with the database. On the web service, port 3443 is blocked so the data cannot be accessed from the outside. For example, going to http://cookbook-api.jvfunweb.me:3443/recipes is blocked and will not load anything.

17. The web service must communicate send and receive complex data as JSON.
- We send our recipe data as JSON through the web service api.

18. The endpoints of the web service and any parameters should be appropriately named.
- We appropriately named our endpoints. For example, for adding a new recipe, the endpoint is '/recipe/new'. For acccessing a recipe, the endpoint is '/recipe/:id'.

19. The web service must support cross-origin resource sharing.
- The web service supports cors by calling the package and using the proper functions.

20. Your web service must be started using a process manager like pm2 so that it stays running.
- The web service is started and managed using pm2 so that it is always running.

21. You will create an Nginx server that allows global, encrypted access to your web service.
- I created a Nginx server on my dropelt that is used to access the web service.

22. Your back-end must be stored in a separate Git repository that you have shared with your instructor. On GitHub, GitLab, and Bitbucket, share with the user twodee.
- Our database back end server is in a GitHub repository separate from our client. It is shared with the instructor.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
