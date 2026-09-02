import Employee from "../models/EmployeeModel.js";
import sendResponse from "../utils/Response.js";
import { editEmployeeSchema } from "../utils/validator.js";

// Controller to edit an existing employee
const editEmployee = async (req, res) => {
    try {
        const employeeId = req.params.id;
        const value = editEmployeeSchema.parse(req.body);

        const updatedData = value;
        const existingEmployee = await Employee.findById(employeeId);

        if (!existingEmployee) {
            return sendResponse(res, 404, "Employee not found", null);
        }

        const isDuplicateEmail = await Employee.findOne({ email: updatedData.email, _id: { $ne: employeeId } });
        if (isDuplicateEmail) {
            return sendResponse(res, 400, "Email already exists for another employee", null);
        }

        const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, updatedData, { new: true });

        if (!updatedEmployee) {
            return sendResponse(res, 404, "Employee not found", null);
        }

        sendResponse(res, 200, "Employee updated successfully", updatedEmployee);
    } catch (err) {
        sendResponse(res, 500, "Failed to update employee", null);
    }
};

export default editEmployee;