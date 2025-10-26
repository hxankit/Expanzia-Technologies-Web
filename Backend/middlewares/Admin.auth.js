import jwt from "jsonwebtoken";
import { errorResponse } from "../handler/response.handler.js";

export const AdminAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return errorResponse(res, 401, "You are not logged in. Please login first.");
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    if (
      !decodedToken?.username ||
      decodedToken.username !== process.env.ADMIN_USERNAME
    ) {
      return errorResponse(res, 403, "Unauthorized: Admin access required.");
    }

    req.admin = decodedToken;
    next();

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return errorResponse(res, 401, "Session expired. Please login again.");
    }

    if (error.name === "JsonWebTokenError") {
      return errorResponse(res, 401, "Invalid token. Please login again.");
    }

    return errorResponse(res, 500, "Server error", error.message);
  }
};
