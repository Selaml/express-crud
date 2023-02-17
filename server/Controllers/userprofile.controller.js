import { PrismaClient } from "@prisma/client";
import { readFileSync} from 'fs'

const prisma = new PrismaClient();

export const postuserprofile = async (req, res) => {
  // const { userid,image} = req.body;
  
    try {
      const employee = await prisma.profile.create({
        data: {
       // userid:userid,
        image:readFileSync('uploads/'+ req.file.filename)
        },
      });
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };
  