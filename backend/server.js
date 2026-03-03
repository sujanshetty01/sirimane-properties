const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// Note: For a real app, this should be in .env. We are using a local memory db or simple local connection for demo.
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sirimane';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Models
const propertySchema = new mongoose.Schema({
  title: String,
  location: String,
  price: String,
  beds: Number,
  baths: Number,
  sqft: String,
  tags: [String],
  image: String
});
const Property = mongoose.model('Property', propertySchema);

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  interest: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/properties', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Inquiry received successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Seed Initial Data Route (for demo purposes)
app.post('/api/seed', async (req, res) => {
    try {
        await Property.deleteMany({});
        const seedData = [
            {
              title: "Onyx Horizon Villa",
              location: "Sadashivanagar, Bangalore",
              price: "₹18.5 Cr",
              beds: 5,
              baths: 6,
              sqft: "8,500",
              tags: ["Ultra Luxury", "Ready to Move"],
              image: "/src/assets/property-1.png"
            },
            {
              title: "The Azure Penthouse",
              location: "UB City Area, Bangalore",
              price: "₹12.0 Cr",
              beds: 4,
              baths: 4,
              sqft: "5,200",
              tags: ["Panoramic Views", "Smart Home"],
              image: "/src/assets/property-1.png"
            },
            {
              title: "Verdant Estate",
              location: "Indiranagar, Bangalore",
              price: "₹22.0 Cr",
              beds: 6,
              baths: 7,
              sqft: "12,000",
              tags: ["Private Pool", "Home Theatre"],
              image: "/src/assets/property-1.png"
            }
          ];
          await Property.insertMany(seedData);
          res.json({ message: "Database seeded successfully"});
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
