import express from "express";

import { postuser } from "../Controllers/Employee.controller.js";

export const userrouter = express.Router();

userrouter.post("/user", postuser);
