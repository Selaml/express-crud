//const db = require("../../models");
import { PrismaClient } from "@prisma/client";
//const Test = db.tests;
//import{uploadFileMiddleware} from "../Middlewares/TestExcel .middlewarw.js"

const readXlsxFile = import("read-excel-file/node");

const prisma = new PrismaClient();

export const  postupload = async (req, res) => {
 // uploadFileMiddleware(req,res);
 return res.status(400).json({ msg:"success" });
  /*try {
    //await upload(req, res);
    if (req.file == undefined) {
      return res.status(400).send("Please upload an excel file!");
    }

    let path =
      __basedir + "/uploads/" + req.file.filename;

    readXlsxFile(path).then((rows) => {
      // skip header
      rows.shift();

      let tests = [];

      rows.forEach((row) => {
        let test = {
          id: row[0],
          name: row[1],
          email: row[2],
          phone: row[3],
        };

       tests.push(test);
      });

     Test.bulkCreate(tests)
        .then(() => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file.originalname,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Fail to import data into database!",
            error: error.message,
          });
        });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};*/
}
export const getTests = async (req, res) => {
   try{
    const response = await prisma.test_excel.findMany()
    res.status(200).json(response);
 
} catch (error) {
  res.status(500).json({ msg: error.message || "Some error occurred while retrieving tests." });
}
}

