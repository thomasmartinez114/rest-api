// Async and Await
async function custoerInfo() {
  try {
    const customer = await getCustomer;
  } catch (err) {
    console.log('Error', err.message);
  }
}

getCustomer(1, customer => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies(movies => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...');
      });
    });
  }
});

// Change functions to have promise

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Mosh Hamedani',
        isGold: true,
        email: 'email'
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}
