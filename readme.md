## Todo

- [ ] [Request Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

- [ ] [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

A Cross-Origin resource fails if a network request using js is requesting to:

- a different domain
- a different subdomain
- a different port
- a different protocol

On the server side we have to allow incoming requests from this differences.

```js
// require cors package
const cors = require("cors");

// add cors into the middleware
app.use(cors());
// this sets the response headers to allow cross origin resource sharing
```

OR your own version

```js
app.use(function (req, res, next) {
  /* 
    this allows all resources due to the *. 
    If you want to allow a specific domain
    then you can replace the * with a url 
    */
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
```

Biggest thing with cors is that if your front end is requesting from the same server it came from then cors will not be an issue. Only if it is across servers.

- [ ] [Preflight Options Request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)

- [ ] [What are proxies?](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/)

- [ ] Mongoose Setup

```js
// requiree mongoose package
const mongoose = require("mongoose");

// connect to the database we want access to
mongoose
  // uri is where the mongo server exists. For deployment you will need to have a deployed mongodb database. Check out atlas.
  .connect(`mongodb://127.0.0.1:27017/music`)
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// create the document schema
// Schema is the data validation of our documents
const bandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    default: "generic",
  },
});

// pass the schema into the model
// Model is what gives us access to requesting data from the database
const Band = new mongoose.model("Band", bandSchema);

// make model available outside of file
module.exports = Band;
```

- [ ] Import Export (React Vs Node)

```js
/* == react == */
// import
import Component from "./file";
// export
export default Component;

/* 
  NOTE: 
    You could use the above 
    import export syntax in node 
    if you add "type": "module" 
*/

/* == base node == */
// import
const Component = require("./file");
// export
module.exports = Component;
```
