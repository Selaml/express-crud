import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import SECRET_KEY from "secret-key";
//import { authEmployee } from "../Middlewares/EmployeeAuth.middlewar";
//import dotenv from "dotenv";

const prisma = new PrismaClient();

export const getEmployees = async (req, res) => {
  try {
  const response = await prisma.employee.findMany({
      include: {
        employee_roll:true,
      },
      
    });

    //console.log(response.includes(rollid,employee & { employee_roll: employee_roll,}));
    
   // console.log(response.employee_roll.name);
    res.status(200).json(response);
 
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getEmployee = async (req, res) => {
  try {
    const response = await prisma.employee.findUnique({
      where: {
        id: Number(req.params.id),
      },
      include: {
        employee_roll:true,
      },
      
    });
    console.log(response.employee_roll.name);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const postEmployee = async (req, res) => {
  const { first_name, last_name,gross_salary ,email, password ,rollid} = req.body;

  try {
    const employee = await prisma.employee.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gross_salary:gross_salary,
        password: password,
        rollid:rollid
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const regEmployee = async (req, res) => {
  
 
    // const salt = bcrypt.genSaltSync(10);
    const { first_name, last_name,gross_salary ,email, password ,rollid} = req.body;

  try {
     const hash = await bcrypt.hash(password, 10);
    const employee = await prisma.employee.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        gross_salary:gross_salary,
        password: hash,
        rollid:rollid
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const logEmployee = async (req, res) => {
  const { email, Password } = req.body;
  try {
    const employee = await prisma.employee.findUnique({
      where: {
        email: email,
      },
    });
    if (!employee) {
      return res.status(404).json({ message: "employee not found" });
    }
    const matchpassword = await bcrypt.compareSync(Password, employee.Password);
    console.log(matchpassword);
    if (!matchpassword) {
      return res.status(400).json({ message: "wrong password" });
    }
    const token = Jwt.sign(
      { email: employee.email, id: employee._id, roll: employee.emprollid },
      process.env.SECRET_KEY
    );
    res.status(400).json({ tok: token, employee });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};


export const updateEmployee = async (req, res) => {
  const { Name, phone, email,emprollid} = req.body;

  try {
    const employee = await prisma.employee.update({
      where: {
        id: Number(req.params.id),
      
      },
      data: {
        Name: Name,
        phone: phone,
        email: email,
        emprollid: emprollid,}
        
    });
   
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  const { Name, phone, email,emprollid} = req.body;

  try {
    const employee = await prisma.employee.delete({
      where: {
        id: Number(req.params.id),
      
      },   
    });
   
    res.status(201).json("succsesfully deleted");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const salaryEmployee = async (req, res) => {
  const { gross_salary, emloyeeid,taxid} = req.body;

  try {
    const tax = await prisma.tax.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(tax.empid);
    
   /* const salary = gross_salary-(tax.percentage/100*gross_salary);
    //console.log(salary)
    const employee = await prisma.empsalary.create({

    
      data: {
        gross_salary: gross_salary,
        emloyeeid: emloyeeid,
        taxid: taxid,
        net_salary: salary,
       
      },
     
    });
    //res.status(201).json(employee);
    res.status(200).json(employee);


*/
}catch (error) {
  res.status(400).json({ msg: error.message });
}
};

export const salaryEmployees = async (req, res) => {
  const {empid,deducid,allowid,net_salary,status} = req.body
 
  try {
    
    const payroll = await prisma.payroll.create({
      where: {
        id: Number(req.params.empid),
      },
      data: {
       // gross_salary:gross_salary,
        deducid:deducid,
        allowid:allowid ,
        net_salary:net,
        empid:empid,
        status:status,
      },
    
      
    });
    consol.log(gross)
    
    res.status(200).json(payroll);
   /* const salary = gross_salary-(tax.percentage/100*gross_salary);
    //console.log(salary)
    const employee = await prisma.empsalary.create({

    
      data: {
        gross_salary: gross_salary,
        emloyeeid: emloyeeid,
        taxid: taxid,
        net_salary: salary,
       
      },
     
    });
    //res.status(201).json(employee);
    res.status(200).json(employee);


*/
}catch (error) {
  res.status(400).json({ msg: error.message });
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
};

export const getsalaryEmployees = async (req, res) => {
 //const {empid,allowid,deducid,net_salary,status} = req.body
  try {
  const payroll = await prisma.payroll.findMany;

    res.status(200).json(payroll);
   /* const salary = gross_salary-(tax.percentage/100*gross_salary);
    //console.log(salary)                              
    const employee = await prisma.empsalary.create({

    
      data: {
        gross_salary: gross_salary,
        emloyeeid: emloyeeid,
        taxid: taxid,
        net_salary: salary,
       
      },
     
    });
    //res.status(201).json(employee);
    res.status(200).json(employee);


*/
}catch (error) {
  res.status(400).json({ msg: error.message });
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
};



export const getSalary = async (req, res) => {
  try {
  const salary = await prisma.payroll.findMany({
      include: {
        employee:true,
      },
      
    });

    //console.log(response.includes(rollid,employee & { employee_roll: employee_roll,}));
    
   // console.log(response.employee_roll.name);
    res.status(200).json(salary);
 
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

///ens itf mdc thecfin saas bai