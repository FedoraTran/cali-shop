const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Dữ liệu sản phẩm giả (thay vì file data.ts ở frontend)
const products = [
  { id: 1, name: 'Laptop Gaming Acer Nitro 5', price: 25000000, category: 'Laptop', image: 'assets/images/product-1.webp' },
  { id: 2, name: 'Laptop Gaming ASUS ROG Strix G15', price: 35000000, category: 'Laptop', image: 'assets/images/product-2.webp' },
  { id: 3, name: 'PC Gaming G-Power', price: 45000000, category: 'PC', image: 'assets/images/product-3.webp' },
  { id: 4, name: 'Màn hình LCD Samsung 27"', price: 7000000, category: 'Screen', image: 'assets/images/product-4.webp' },
  { id: 5, name: 'Bàn phím cơ Corsair K70', price: 3500000, category: 'Keyboard', image: 'assets/images/product-5.webp' },
  { id: 6, name: 'Chuột Logitech G Pro X Superlight', price: 3000000, category: 'Mouse', image: 'assets/images/product-6.webp' },
];

app.use(cors()); // Cho phép request từ Angular (chạy ở port khác)

// API endpoint để lấy tất cả sản phẩm
app.get('/api/products', (req, res) => {
  res.json(products);
});

// API endpoint để lấy một sản phẩm theo ID
app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
