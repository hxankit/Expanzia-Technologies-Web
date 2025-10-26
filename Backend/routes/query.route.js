import  { Router } from "express";
import { AdminAuth } from "../middlewares/Admin.auth.js";
import { postQuery, updateQueryStatus } from "../controllers/query.controller.js";
const router=Router()
//public route
router.route("/new").post(postQuery)

//privateroute
router.route("/edit").post(AdminAuth,updateQueryStatus)

export default router