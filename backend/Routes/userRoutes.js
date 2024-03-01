import express from "express"; 
import { formData} from "../Controllers/userController.js";
const router = express.Router()

router.post("/form",formData)



export default router