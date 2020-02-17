// POST /api/returns {customerId, movieId}

// Return 401 if client is not logged in - Unauthorized
// Return 400 if customerId is not provided
// Return 400 if movieId is not provided
// Return 404 if no rental found for this customer/movie - NOT FOUND
// Return 400 if rental already processed
