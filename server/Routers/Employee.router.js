import express from "express";
import { getEmployees, salaryEmployees } from "../Controllers/Employee.controller.js";
import { getEmployee } from "../Controllers/Employee.controller.js";
import { postEmployee } from "../Controllers/Employee.controller.js";
import { regEmployee } from "../Controllers/Employee.controller.js";
import { logEmployee } from "../Controllers/Employee.controller.js";
import { authEmployee } from "../Middlewares/EmployeeAuth.middlewar.js";
import { updateEmployee } from "../Controllers/Employee.controller.js";
import { deleteEmployee } from "../Controllers/Employee.controller.js";
import {salaryEmployee} from "../Controllers/Employee.controller.js";
import { getSalary } from "../Controllers/Employee.controller.js";
import { postEmployeeroll } from "../Controllers/EmployeeRoll.controller.js";
import { upload } from "../Middlewares/TestExcel .middlewarw.js";
export const Employeerouter = express.Router();

Employeerouter.get("/employees",authEmployee, getEmployees);
Employeerouter.get("/employee/:id", getEmployee);
Employeerouter.post("/employee", postEmployee);
Employeerouter.post("/register",upload.single('file'),regEmployee);
Employeerouter.post("/login", logEmployee);
Employeerouter.get("/user", authEmployee);
Employeerouter.put("/edit/:id", updateEmployee);
Employeerouter.delete("/delete/:id", deleteEmployee);
Employeerouter.post("/salary", salaryEmployees);
Employeerouter.get("/salaries", getSalary);
Employeerouter.post("/employeeroll", postEmployeeroll);
//Employeerouter.get("/salary/:id", salaryEmployee);



