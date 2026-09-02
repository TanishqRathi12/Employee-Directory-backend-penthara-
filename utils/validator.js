import * as z from "zod";

// Validator for adding a new employee
export const employeeSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    department: z.string().min(1, "Department is required"),
    role: z.string().min(1, "Role is required"),
});

// Validator for editing an employee
export const editEmployeeSchema = z.object({
    name: z.string().min(1, "Name is required").optional(),
    email: z.email("Invalid email address").optional(),
    department: z.string().min(1, "Department is required").optional(),
    role: z.string().min(1, "Role is required").optional(),
});