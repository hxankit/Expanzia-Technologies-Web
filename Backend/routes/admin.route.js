import  { Router } from "express";
import { adminCheck,  adminLogin, adminLogout } from "../controllers/Auth.controller.js";
import { AdminAuth } from "../middlewares/Admin.auth.js";
const router=Router()

router.route("/login").post(adminLogin)
router.route("/logout").post(adminLogout)

router.route("/me").post(AdminAuth,adminCheck)

export default router