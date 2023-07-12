const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const port = 8081;
const app = express();
app.use(cors());

const mysqlParamObject = {
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "sakila",
};
const connection = mysql.createConnection(mysqlParamObject);
app.get("/api/film", applyFilms);

function applyFilms(req, resp) {
  const sqlQuery = "SELECT * FROM film";
  const promise = connection.promise().query(sqlQuery);
  promise
    .then(obradiResult)
    .catch(obradiError)
    .finally(() => connection.end());

  function obradiResult([rows, fields]) {
    const responseObject = {
      items: rows,
    };
    resp.json(responseObject);
  }

  function obradiError(error) {
    console.log(error);
  }
}

app.listen(port, () => console.log(`App starta na portu ${port}`));
