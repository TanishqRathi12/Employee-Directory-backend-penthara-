import Employee from "../models/EmployeeModel.js";
import sendResponse from "../utils/Response.js";

// Controller to fetch employees with pagination
const getEmployees = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 6;
    const skip = (page - 1) * limit;

    const employees = await Employee.find()
      .skip(skip)
      .limit(limit)
      .select("id name email department role");

    sendResponse(res, 200, "Employees fetched successfully", {
      employees,
      pagination: {
        page,
        limit,
      },
    });
  } catch (err) {
    sendResponse(res, 500, "Failed to fetch employees", null);
  }
};

export default getEmployees;