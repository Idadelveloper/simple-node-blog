# simple-node-blog
A simple blog application built with Node.js, Express.js and MongoDB.


![nodeblog](https://user-images.githubusercontent.com/56026636/164999067-7e59370c-c4e2-4114-8f0a-f344bb92335a.png)

### Setup
* npm install
* Create a file at the root called `secrets.js`.
* Sign in to your [MongoDB Atlas](https://www.mongodb.com/) account and create a user and collection called `blogs`.
* In `secrets.js`, input your credentials:
```javascript 
const mongodb = {
    username: "your-username",
    password: "your-password"
}

module.exports = mongodb;
```
* Make sure your `dbURI` in `app.js` is correct!!!
* Run `node app`

