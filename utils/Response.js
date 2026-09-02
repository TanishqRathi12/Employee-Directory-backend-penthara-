// utility function to send a standardized response
const sendResponse = (
    res,
    statusCode, 
    message,
    data,
) => {
    return res.status(statusCode).json({
        success: statusCode < 400,
        statusCode,
        message,
        data,
    });
};

export default sendResponse;