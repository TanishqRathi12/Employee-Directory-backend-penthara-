import router from "express";
import getEmployees from "../controllers/GetEmployee.js";
import addEmployee from "../controllers/AddEmployee.js";
import editEmployee from "../controllers/EditEmployee.js";
import employeeStatistics from "../controllers/GetStatistics.js";
import GetByDeptOrName from "../controllers/GetByDeptOrName.js";

// Created a router instance
const Router = router();

// Defined routes for employee-related operations
Router.get("/", getEmployees);
Router.post("/add", addEmployee);
Router.patch("/edit/:id", editEmployee);
Router.get("/stats", employeeStatistics);
Router.get("/search", GetByDeptOrName);


export default Router;




