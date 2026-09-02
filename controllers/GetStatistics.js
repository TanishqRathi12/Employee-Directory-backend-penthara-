import Employee from "../models/EmployeeModel.js";
import sendResponse from "../utils/Response.js";


// Controller to fetch employee statistics
const employeeStatistics = async (req, res) => {
    try {
        const totalEmployees = await Employee.countDocuments();
        const employeesByDepartment = await Employee.aggregate([
            { $group: { _id: "$department", count: { $sum: 1 } } }
        ]);
        const employeesByRole = await Employee.aggregate([
            { $group: { _id: "$role", count: { $sum: 1 } } }
        ]);
        
        const statistics = {
            totalEmployees,
            employeesByDepartment,
            employeesByRole
        };

        sendResponse(res, 200, "Employee statistics fetched successfully", statistics);
    } catch (err) {
        sendResponse(res, 500, "Failed to fetch employee statistics", null);
    }
};

export default employeeStatistics;