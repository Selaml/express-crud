import express from "express";
import { getTests } from "../Controllers/TestExcel.controller.js";
import { postupload } from "../Controllers/TestExcel.controller.js";
import { getEmployee } from "../Controllers/Employee.controller.js";
import { upload } from "../Middlewares/TestExcel .middlewarw.js";

export const Testrouter = express.Router();
Testrouter.post("/upload", upload.single("file"), postupload);
Testrouter.get("/tests", getTests);
//upload.single("file")
/*Testrouter.post("/upload", upload.single("filename"), (req, res)=>{
    console.log(req.file) //Here your file is logged to the console!
    res.end("FIle Upload successfull: Here it is!: "+JSON.stringify(req.file))
  })*/
