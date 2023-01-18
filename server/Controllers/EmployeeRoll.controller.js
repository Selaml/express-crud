import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";
import Jwt from "jsonwebtoken";
import SECRET_KEY from "secret-key";
//import dotenv from "dotenv";

const prisma = new PrismaClient();

export const getEmployeesroll = async (req, res) => {
  try {
    const response = await prisma.employee_roll.findMany({
      include: {
        employee:true,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
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

export const postEmployeeroll = async (req, res) => {
  const { name,description } = req.body;

  try {
    const employee = await prisma.employee_roll.create({
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
