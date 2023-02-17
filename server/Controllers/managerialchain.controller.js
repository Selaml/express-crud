import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import SECRET_KEY from "secret-key";
//import dotenv from "dotenv";

const prisma = new PrismaClient();

export const getEmployeesroll = async (req, res) => {
  try {
    const response = await prisma.managerial_chain.findMany({
      include: {
        employee:true,
        team:true,
        departement:true
      },
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
export const postEmployeeroll = async (req, res) => {
  const { emp_id,team_id,departmnt_id} = req.body;

  try {
    const managerial_chain = await prisma.managerial_chain.create({
      data: {
        emp_id:emp_id,
        team_id:team_id,
        departmnt_id:departmnt_id
       
      },
    });
    res.status(201).json(managerial_chain);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
