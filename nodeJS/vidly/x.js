// POST /api/returns {customerId, movieId}

// ----------- NEGATIVE CASES --------------------
// Return 401 if client is not logged in - Unauthorized
// Return 400 if customerId is not provided
// Return 400 if movieId is not provided
// Return 404 if no rental found for this customer/movie - NOT FOUND
// Return 400 if rental already processed

// ----------- POSITIVE CASES --------------------
// Return 200 if valid request
// Set the return date
// Calculate rental fee (numberOfDays * movie.dailyRentalRate)
// Increase the stock of movie
// Return the rental & summary (dateout, dateReturned, rentalReceived)

