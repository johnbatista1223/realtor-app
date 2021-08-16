const bcrypt = require('bcrypt')
const withAuth = require('../utils/auth');

const { Schema, model } = require('mongoose'); 
const listingSchema = new Schema({ 
listingPrice: { 
type: String, 
}, 
listingAddress: { 
type: String, 
}, 
listingAuthor: { 
type: String, 
}, 
}); 
 
const Listing = model('Listing', listingSchema); 
 
module.exports = Listing;