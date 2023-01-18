import express from "express";
const multer = import("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null + "./server/uploads/");
  },
  filename: (req, file, cb)=> {
    console.log(file.originalname); 
    cb(null, file.originalname);
  },
});
/*
const excelFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("excel") ||
    file.mimetype.includes("spreadsheetml")
  ) {
    cb(null, true);
  } else {
    cb("Please upload only excel file.", false);
  }
};
*/

 const upload= multer({ storage: storage});
export const uploadFileMiddleware = util.promisify(upload);
//module.exports = uploadFileMiddleware;
