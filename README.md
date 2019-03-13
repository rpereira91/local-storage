# Local CRUD (Create Read Update Delete) app in ReactJS

I wrote this little application in ReactJS to see how to work with the localStorage property that exists with most modern web browsers. You can store simple data locally and access and modify it across sessions. This application will not be used to store any kind of user data, since storing sensitive of information in Local Storage isn't very smart. 

# What is Local Storage?
Local Storage is a feature of HTML5 that stores information as a JavaScript Object that you can use to store and retreve data from. The information persists even after the user closes the browser tab, which is why this sort of thing isn't very safe for storing sensitive information. 
# Why use it here?
This webpage is designed to run without any kind of web server since it's a static site. Local Storage is perfect for Client Side Rendering since it doesn't need to communicate with any kind of file server. The information stored here will only be string data (since that's all Local Storage can handle) and will mainly be used to keep track of my daily tasks. 

# When not to use Local Storage?
- If you want to store any kind of data other than String variables
- If you want to store a large amount of data (Local Storage has a 5MB max)
- If you want to store sensitive user data (Local Storage can be accessed by any Java Script code)

# Instructions 
- Clone the repo
- CD to Repo
```sh
    npm install
```
```sh
    npm start
```
# Resources
[Hacker Noon tutorial](https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2)

[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

[React Simple Storage Package](https://github.com/ryanjyost/react-simple-storage)