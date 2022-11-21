import express from "express";
import { getEmployeesroll } from "../Controllers/EmployeeRoll.controller.js";
import { getEmployeeroll } from "../Controllers/EmployeeRoll.controller.js";
import { postEmployeeroll } from "../Controllers/EmployeeRoll.controller.js";

export const Employeerollrouter = express.Router();

Employeerollrouter.get("/employeesroll", getEmployeesroll);
Employeerollrouter.get("/employeeroll/:id", getEmployeeroll);
Employeerollrouter.post("/employeeroll", postEmployeeroll);
