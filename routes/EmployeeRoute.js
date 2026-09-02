import router from "express";
import { getAllEmployees, getEmployee } from "../controllers/GetEmployee.js";
import addEmployee from "../controllers/AddEmployee.js";
import editEmployee from "../controllers/EditEmployee.js";
import employeeStatistics from "../controllers/GetStatistics.js";
import GetByDeptOrName from "../controllers/GetByDeptOrName.js";

// Created a router instance
const Router = router();

// Defined routes for employee-related operations
Router.get("/", getEmployee);
Router.get("/all", getAllEmployees);
Router.post("/add", addEmployee);
Router.patch("/edit/:id", editEmployee);
Router.get("/stats", employeeStatistics);
Router.get("/search", GetByDeptOrName);


export default Router;




