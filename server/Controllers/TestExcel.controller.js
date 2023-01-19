//const db = require("../../models");
import { PrismaClient } from "@prisma/client";
//const Test = db.tests;
//import{uploadFileMiddleware} from "../Middlewares/TestExcel .middlewarw.js"
//mport fs  from 'fs';

import readXlsxFile from "read-excel-file/node";

const prisma = new PrismaClient();

export const postupload = async (req, res) => {
  // uploadFileMiddleware(req,res);
  // return res.status(400).json({ msg: "success" });
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    //let path = __basedir + "/uploads/" + req.file.filename;
    // console.log(req.file.path);
    let sh = [];
    let sh1 = " ";

    readXlsxFile(req.file.path, { getSheets: true }).then((sheets) => {
      sheets.forEach((obj) => {
        sh.push(obj.name);
        //sh1 = sh1 + obj.name;
      });
    });
    console.log(sh);
    // console.log(sh[i]);
    readXlsxFile(req.file.path, {}).then((rows) => {
      rows.shift();

      let tests = [];

      rows.forEach((row) => {
        let test = {
          //  id: row[0],
          name: row[0],

          email: row[1],
          phone: row[2],
        };
        // console.log(test);

        tests.push(test);
      });
      console.log(tests);

      //  const { name, email, phone } = req.body;

      //console.log(element.name);

      const ex = prisma.test_excel
        .createMany({
          data: tests,
        })
        .then(() => {
          //console.log(ex);
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

export const getTests = async (req, res) => {
  try {
    const response = await prisma.test_excel.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      msg: error.message || "Some error occurred while retrieving tests.",
    });
  }
};
