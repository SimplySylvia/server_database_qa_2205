const mysql = require("mysql2");
const Promise = require("bluebird");

const connection = mysql.createConnection({
  database: "music",
  user: "root",
  password: "",
  host: "127.0.0.1",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(function () {
    console.log("Mysql connected...");
  })
  .then(() => {
    return db.queryAsync(
      `CREATE TABLE IF NOT EXISTS bands (
          id int NOT NULL AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          genre VARCHAR(255) NOT NULL,
          PRIMARY KEY (id)
      )`
    );
  })
  .catch(function (err) {
    console.log("Database Error", err);
  });

const find = () => {
  return db
    .queryAsync(`SELECT * FROM bands;`)
    .then(results => results[0])
    .catch(err => console.log(err));
};

const create = ({ name, genre }) => {
  return db
    .queryAsync(
      `INSERT INTO bands (name,genre) 
       VALUES (?, ?);`,
      [name, genre]
    )
    .catch(err => console.log(err));
};

module.exports = {
  find,
  create,
};
