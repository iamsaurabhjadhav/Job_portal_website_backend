import express from "express";
import { isAuthenticated, isAuthorized } from "../middleware/auth.js";
import {
  postJob,
  getASingleJob,
  getMyJob,
  deleteJob,
  getAllJobs,
} from "../controller/jobController.js";

const router = express.Router();

router.post("/post", isAuthenticated, isAuthorized("Employer"), postJob);
router.get("/getall", getAllJobs);
router.get("/getmyjobs", isAuthenticated, isAuthorized("Employer"), getMyJob);
router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Employer"),
  deleteJob
);
router.get("/get/:id", isAuthenticated, getASingleJob);

export default router;
