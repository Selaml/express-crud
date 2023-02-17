import Jwt from "jsonwebtoken";
import SECRET_KEY from "secret-key";
import { logEmployee } from "../Controllers/Employee.controller.js";

/*export const authEmployee = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.API_SECRET,
      function (err, decode) {
        if (err) req.prisma.employee = undefined;
        User.findOne({
          _id: decode.id,
        }).exec((err, employee) => {
          if (err) {
            res.status(500).send({
              message: err,
            });
          } else {
            req.prisma.employee = employee;
            next();
          }
        });
      }
    );
  } else {
    req.employee = undefined;
    next();
  }
};*/
export const authEmployee = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    Jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
     // console.log(employee);
      if (err) {
        return res.sendStatus(403);
      }
      //const { Name,email, emprollid } = req.body;

      //req.body = employee;
     // console.log(employee.roll)
     // res.status(400).json("welcome employee"+ " " +employee.roll);
       //console.log(user)
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export const authEmployeee = (req, res, next) => {

}