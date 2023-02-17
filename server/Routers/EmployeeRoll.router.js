import express from "express";
import { getEmployeesroll } from "../Controllers/EmployeeRoll.controller.js";
//import { getEmployeeroll } from "../Controllers/EmployeeRoll.controller.js";
import { postEmployeeroll } from "../Controllers/EmployeeRoll.controller.js";
import { deleteEmployeeroll } from "../Controllers/EmployeeRoll.controller.js";
import {getEmployeerolll} from "../Controllers/EmployeeRoll.controller.js";
import{postPermission } from "../Controllers/EmployeeRoll.controller.js";
import{authEmployee} from "../Middlewares/EmployeeAuth.middlewar.js";
export const Employeerollrouter = express.Router();

Employeerollrouter.get("/employeesroll",authEmployee,getEmployeesroll);
//Employeerollrouter.get("/employeeroll/:id", getEmployeeroll);
Employeerollrouter.post("/employeeroll",postEmployeeroll);
Employeerollrouter.put("/employeeroll/:id", deleteEmployeeroll);
Employeerollrouter.get("/employeerolll", getEmployeerolll);
Employeerollrouter.post("/permission", postPermission );


