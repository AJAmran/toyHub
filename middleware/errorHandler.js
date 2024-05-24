function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log the error stack trace for debugging

  // Set the response status code and send a JSON response with the error message
  res.status(500).json({ message: err.message });
}

export default errorHandler;
