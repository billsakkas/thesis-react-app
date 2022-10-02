const { Prisma } = require("@prisma/client");

const user = {
  name: "John Doe",
  email: "johnDoe@jd.com",
  emailVerified: new Date(),
  image: "https://placekitten.com/200/300",
  isTrusted: true,
  createdAt: new Date(),
};

const realEstateListings = [
  {
    title: "House for sale",
    description: "This is a house for sale",
    price: 100000,
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    bedrooms: 3,
    bathrooms: 2,
    sqmeters: 200,
    lotSize: 300,
    yearBuilt: 2000,
    type: "house",
    status: "active",
    images: [
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
    ],
  },
  {
    title: "Great apartment for rent",
    description: "This is a great apartment for rent",
    price: 550,
    address: "D. Nika 26",
    city: "Katerini",
    state: "Thessaloniki",
    zip: "60100",
    bedrooms: 2,
    bathrooms: 1,
    sqmeters: 100,
    lotSize: 0,
    yearBuilt: 1990,
    type: "house",
    status: "active",
    images: [
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
    ],
  },
  {
    title: "House with a pool",
    description: "This is a house with a pool",
    price: 200000,
    location: {
      create: {
        address: "23 Cambridge Cottages",
        city: "London",
        state: "England",
        zip: "W1T 1JY",
        country: "UK",
        latitude: 51.5194,
        longitude: -0.1372,
      },
    },
    bedrooms: 4,
    bathrooms: 3,
    sqmeters: 300,
    lotSize: 400,
    yearBuilt: 2005,
    type: "house",
    status: "active",
    images: [
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
      "https://source.unsplash.com/random/200x300",
    ],
  },
];

export { user };
