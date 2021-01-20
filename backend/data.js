import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sidra',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Huda',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        name: 'Lenovo Thinkpad x1 carbon g8',
        category: 'Laptops',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 10,
        brand: 'Lenovo',
        description: 'high quality product',
      },
      {
        name: 'Lenovo Legion Gaming PC',
        category: 'Laptops',
        image: '/images/p2.jpg',
        price: 100,
        countInStock: 20,
        brand: 'Lenovo',
        description: 'high quality product',
      },
      {
        name: 'Dell XP100',
        category: 'Laptops',
        image: '/images/p3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'Dell',
        description: 'high quality product',
      },
      {
        name: 'Samsung S20',
        category: 'Mobile Phones',
        image: '/images/p4.jpg',
        price: 78,
        countInStock: 15,
        brand: 'Samsung',
        description: 'high quality product',
      },
      {
        name: 'Samsung S6',
        category: 'Mobile Phones',
        image: '/images/p5.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Samsung',
        description: 'high quality product',
      },
      {
        name: 'Samsung Galaxy S3',
        category: 'Mobile Phones',
        image: '/images/p6.jpg',
        price: 139,
        countInStock: 12,
        brand: 'Samsung',
        description: 'high quality product',
      },
    ],
  };
  export default data;