import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import SECRET_KEY from "secret-key";
//import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

export const getEmployeesroll = async (req, res) => {
  try {
    const response = await prisma.user_roll.findMany({
      
      where:{
        is_deleted:false
      }
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
/*
export const getEmployeeroll = async (req, res) => {
  try {
    const response = await prisma.employee_roll.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
*/
/*Join Table

import type { Photo } from '@prisma/client'
const feed = await prisma.$queryRaw<Photo[]>`
    select * from "Photo"
      union
    select * from "Video"
      order by "createdAt"
      limit 10



      SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
      */
export const postEmployeeroll = async (req, res) => {
  const { name,description } = req.body;
   //const Id = uuidv4()

  try {
    const employee = await prisma.user_roll.create({
      data: {
       //Id,
        name: name,
        description:description
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteEmployeeroll = async (req, res) => {
  const { is_deleted} = req.body;

  try {
    const employee = await prisma.user_roll.update({
      where: {
        id: Number(req.params.id),
      
      },
      data: {
        is_deleted:true
       }
        
    });
   
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const getEmployeerolll = async (req, res) => {
  const result = await prisma.$queryRaw`SELECT name FROM user_roll union SELECT name FROM user_permission`
  res.status(201).json(result);
  
 
};
 
export const postPermission = async (req, res) => {
  const { name,description } = req.body;
   const Id = uuidv4()

  try {
    const employee = await prisma.user_permission.create({
      data: {
      
        name: name,
        description:description
      },
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};