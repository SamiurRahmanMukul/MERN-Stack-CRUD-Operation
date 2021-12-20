# MERN Stack CRUD Application (Backend)

## Installing Packages

```sh
  npm i express         // node.js framework
  npm i mongoose        // mongodb object data modding tools
  npm i dotenv          // for access environment variable
  npm i cors            // node.js cors middleware
  npm i serve-favicon   // favicon serving middleware with catching
```

## API Documentation

```js
// API routes for users
app.get("api/v1/users"); // GET ALL USERS
app.get("api/v1/users/:id"); // GET USER BY ID
app.post("api/v1/users"); // CREATE USER
app.put("api/v1/users/:id"); // UPDATE USER
app.delete("api/v1/users/:id"); // DELETE USER

// API routes for exercise
app.get("api/v1/exercises"); // GET ALL EXERCISES
app.get("api/v1/exercises/:id"); // GET EXERCISE BY ID
app.post("api/v1/exercises"); // CREATE EXERCISE
app.put("api/v1/exercises/:id"); // UPDATE EXERCISE
app.delete("api/v1/exercises/:id"); // DELETE EXERCISE
```
