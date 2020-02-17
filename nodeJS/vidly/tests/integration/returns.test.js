const { Rental } = require('../../models/rental');
const mongoose = require('mongoose');

describe('/api/returns', () => {
  // Load server and populate DB
  let server;
  let customerId;
  let movieId;

  beforeEach(() => {
    server = require('../../index');

    customerId = mongoose.Types.ObjectId();
    movieId = mongoose.Types.ObjectId();

    const rental = new Rental({
      customer: {
        _id: customerId,
        name: '12345',
        phone: '12345'
      },
      movie: {}
    });
  });

  afterEach(async () => {
    server.close();
    await Genre.remove({});
  });
});
