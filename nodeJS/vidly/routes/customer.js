const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Schema
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  isGold: {
    type: Boolean,
    default: false
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

// Model
const Customer = new mongoose.model('Customer', customerSchema);

// Return all customers in DB
router.get('/', async (req, res) => {
  const customers = await Customer.find().sort('name');
  res.send(customers);
});

// Posting customers
router.post('/', async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    name: req.body.name,
    phone: req.body.phone,
    isGold: req.body.isGold
  });
  customer = await customer.save();

  res.send(customer);
});

// Put
router.put('/:id', async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    {
      new: true
    }
  );

  // Customer doesnt exisit - 404 error
  if (!customer) return res.status(404).send('The customer with the given ID was not found.');

  res.send(customer);
});

function validateCustomer(customer) {
  const schema = {
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    phone: Joi.string()
      .min(5)
      .max(50)
      .required(),
    isGold: Joi.boolean()
  };

  return Joi.validate(customer, schema);
}

module.exports = router;
