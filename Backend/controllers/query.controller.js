
import { errorResponse, succesResponse } from "../handler/response.handler.js";
import { CustomerQuery } from "../models/customerQueries.js";

export const postQuery = async (req, res) => {
    try {
        const { name, email, phone, idea, query } = req.body;

        if (!name || !email || !phone || !idea || !query) {
            return errorResponse(res, 400, "All fields are required");
        }

        const newQuery = await CustomerQuery.create({
            name,
            email,
            phone,
            idea,
            query
        });

        return succesResponse(res, 201, "Query submitted successfully", newQuery);

    } catch (error) {
        console.error("Error posting query:", error);
        return errorResponse(res, 500, "Internal Server Error", error.message);
    }
};

export const updateQueryStatus = async (req, res) => {
    try {
        const { status,id } = req.body;

        // Validate ID and status
        if (!id) return errorResponse(res, 400, "Query ID is required");
        if (!status) return errorResponse(res, 400, "Status field is required");

        const validStatuses = ["new", "in-progress", "resolved", "closed"];
        if (!validStatuses.includes(status)) {
            return errorResponse(res, 400, "Invalid status value");
        }

        // Find and update the query
        const updatedQuery = await CustomerQuery.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!updatedQuery) {
            return errorResponse(res, 404, "Query not found");
        }

        return succesResponse(res, 200, "Query status updated successfully", updatedQuery);

    } catch (error) {
        console.error("Error updating query status:", error);
        return errorResponse(res, 500, "Internal Server Error", error.message);
    }
};



