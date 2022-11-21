import express from "express";
import { getEmployees } from "../Controllers/Employee.controller.js";
import { getEmployee } from "../Controllers/Employee.controller.js";
import { postEmployee } from "../Controllers/Employee.controller.js";
import { regEmployee } from "../Controllers/Employee.controller.js";
import { logEmployee } from "../Controllers/Employee.controller.js";
import { authEmployee } from "../Middlewares/EmployeeAuth.middlewar.js";
import { updateEmployee } from "../Controllers/Employee.controller.js";
import { deleteEmployee } from "../Controllers/Employee.controller.js";

export const Employeerouter = express.Router();

Employeerouter.get("/employees", getEmployees);
Employeerouter.get("/employee/:id", getEmployee);
Employeerouter.post("/employee", postEmployee);
Employeerouter.post("/register", regEmployee);
Employeerouter.post("/login", logEmployee);
Employeerouter.get("/user", authEmployee);
Employeerouter.put("/edit/:id", updateEmployee);
Employeerouter.delete("/delete/:id", deleteEmployee);



