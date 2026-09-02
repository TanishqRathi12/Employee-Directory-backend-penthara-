import Employee from "../models/EmployeeModel.js";
import sendResponse from "../utils/Response.js";
import { employeeSchema } from "../utils/validator.js";

// Controller to add a new employee
const addEmployee = async (req, res) => {

    try {
        const employee = employeeSchema.parse(req.body);

        const existingEmployee = await Employee.findOne({ email: employee.email });
        if (existingEmployee) {
            return sendResponse(res, 400, "Employee with this email already exists", null);
        }

        const newEmployee = new Employee(employee);
        await newEmployee.save();
        sendResponse(res, 201, "Employee added successfully", newEmployee);
    } catch (err) {
        console.log("Error adding employee:", err);
        sendResponse(res, 500, "Failed to add employee", null);
    }
};

export default addEmployee;
