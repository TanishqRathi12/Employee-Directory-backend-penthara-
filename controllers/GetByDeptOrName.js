import Employee from "../models/EmployeeModel.js";
import sendResponse from "../utils/Response.js";

// Controller to fetch employees by department or name
const getByDeptOrName = async (req, res) => {
    try {
        const filter = req.query.filter?.trim().replace(/\s+/g, " ");
        let query = {};
        if (filter) {
            query = {
                $or: [
                    { department: { $regex: filter, $options: "i" } },
                    { name: { $regex: filter, $options: "i" } }
                ]
            };
        }
        const employees = await Employee.find(query).select("id name email department role");
        sendResponse(res, 200, "Employees fetched successfully", employees);
    } catch (err) {
        sendResponse(res, 500, "Failed to fetch employees", null);
    }
}

export default getByDeptOrName;
