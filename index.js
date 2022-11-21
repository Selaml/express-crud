import mysql from "mysql";
import express from "express";
//import dotenv from "dotenv";
import { Employeerouter } from "./Routers/Employee.router.js";
import { Employeerollrouter } from "./Routers/EmployeeRoll.router.js";
//dotenv.config();
var app = express();
import bodyparser from "body-parser";

app.use(bodyparser.json());
app.use(Employeerouter);
app.use(Employeerollrouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});

/*var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "company",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log("DB connection succeded.");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
});

app.listen(4000, () =>
  console.log("Express server is runnig at port no : 4000")
);

//Get all employees
/*app.get("/employees", (req, res) => {
  mysqlConnection.query("SELECT * FROM Employee", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});*/
