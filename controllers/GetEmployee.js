import Employee from "../models/EmployeeModel.js";
import sendResponse from "../utils/Response.js";

// Controller to fetch a single employee
const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find().limit(6).select("id name email department role");
    sendResponse(res, 200, "Employees fetched successfully", employees);
  } catch (err) {
    sendResponse(res, 500, "Failed to fetch employees", null);
  }
};

// Controller to fetch all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().select(" id name email department role");
        sendResponse(res, 200, "All employees fetched successfully", employees);
    }
    catch (err) {
        sendResponse(res, 500, "Failed to fetch employees", null);
    }
}

export { getEmployee, getAllEmployees };