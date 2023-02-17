import express from "express";
import { postuserprofile } from '../Controllers/userprofile.controller.js';
import { upload } from '../Middlewares/TestExcel .middlewarw.js';

export const profilerouter = express.Router();

profilerouter.post("/image",upload.single('file'),postuserprofile);