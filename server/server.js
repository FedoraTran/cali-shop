const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Dữ liệu sản phẩm giả (thay vì file data.ts ở frontend)
const products = [
  { id: 1, name: "ASUS ROG Strix SCAR 18 G835LW SA193W", price: 82990000, category: "gaming", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/336446/asus-rog-strix-scar-18-g835lx-ultra-9-sa193w-2-638792712349227762-750x500.jpg" },
  { id: 2, name: "ASUS ROG Zephyrus G16 GU605CX QR147W", price: 119990000, category: "gaming", image: "https://cdn.tgdd.vn/Products/Images/44/322427/asus-gaming-rog-zephyrus-g16-gu605mv-ultra-9-qr135w-1-1-750x500.jpg" },
  { id: 3, name: "HP Elitebook X360 830 G11", price: 44390000, category: "van-phong", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/331523/hp-elitebook-x360-830-g11-ultra-7-a7rc0pt-1-638661786338705759-750x500.jpg" },
  { id: 4, name: "MacBook Pro 14 inch M5", price: 51790000, category: "van-phong", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/358089/macbook-pro-14-inch-m5-1-638962511548077123-750x500.jpg" },
  { id: 5, name: "MSI Prestige 16 AI Studio B1VFG 082VN", price: 55990000, category: "design", image: "https://cdn.tgdd.vn/Products/Images/44/322958/msi-prestige-16-ai-studio-b1vfg-ultra-9-082vn-2-1-750x500.jpg" },
  { id: 6, name: "Lenovo Yoga Pro 7 14IMH9 83E2006MVN", price: 41990000, category: "design", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333196/lenovo-yoga-pro-7-14imh9-ultra-7-83e2006mvn-1-638701153555784968-750x500.jpg" },
  { id: 7, name: "MSI Prestige 16 AI+ Mercedes AMG B2VMG", price: 49990000, category: "gaming", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/341572/msi-prestige-16-ai-mercedes-amg-b2vmg-ultra-9-288v-088vn-1-638904659240843868-750x500.jpg" },
  { id: 8, name: "Dell XPS 13 9350 - PP9H1", price: 64990000, category: "van-phong", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/342757/dell-xps-13-9350-ultra-7-258v-pp9h1-2-638917189604832011-750x500.jpg" },
  { id: 9, name: "Acer Swift X14 SFX14 72G 79UW", price: 48990000, category: "design", image: "https://product.hstatic.net/200000722513/product/ava_8884341ac5f14efb8e3a4710682698a2_master.png" },
  { id: 10, name: "MacBook Pro 14″ M5 (16GB / 512GB)", price: 52990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M5" },
  { id: 11, name: "MacBook Pro 14″ M5 (24GB / 1TB)", price: 61990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M5+1TB" },
  { id: 12, name: "MacBook Pro 14″ M4 Pro (24GB / 512GB)", price: 47890000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M4+Pro" },
  { id: 13, name: "MacBook Pro 14″ M4 Pro (36GB / 1TB)", price: 63990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M4+Pro+1TB" },
  { id: 14, name: "MacBook Pro 14″ M4 Max (48GB / 2TB)", price: 89990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M4+Max" },
  { id: 15, name: "MacBook Air 15″ M4 (24GB / 1TB)", price: 43990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Air+15+M4" },
  { id: 16, name: "Razer Blade 16 (2025) RTX 4090", price: 119900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Razer+Blade+16+4090" },
  { id: 17, name: "Razer Blade 14 (Ryzen 9 / 32GB / 1TB)", price: 84990000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Razer+Blade+14+Ryzen+9" },
  { id: 18, name: "Asus ROG Zephyrus Duo 16 GX650", price: 139900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=ROG+Zephyrus+Duo+16" },
  { id: 19, name: "Acer Predator Triton 18 PT-18 RTX 4080", price: 109900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Predator+Triton+18+4080" },
  { id: 20, name: "Lenovo Legion 9i (16″ / i9 / RTX 4090)", price: 124900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Legion+9i+16+4090" },
  { id: 21, name: "HP Spectre x360 16 (OLED / i7 / 32GB)", price: 79990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=Spectre+x360+16" },
  { id: 22, name: "Asus Zenbook Pro 14 Duo OLED (i9 / 64GB)", price: 89990000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=Zenbook+Pro+14+Duo" },
  { id: 23, name: "Lenovo ThinkPad X1 Carbon Gen 12 (i7 / 32GB)", price: 68990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=ThinkPad+X1+Carbon+Gen12" },
  { id: 24, name: "Lenovo ThinkPad P1 Gen 6 (i9 / RTX A3000)", price: 124900000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=ThinkPad+P1+Gen6" },
  { id: 25, name: "Acer ConceptD 7 Ezel (i7 / RTX 3070)", price: 97990000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=ConceptD+7+Ezel" },
  { id: 26, name: "Gigabyte Aero 16 OLED (i9 / RTX 4080)", price: 134900000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=Aero+16+OLED" },
  { id: 27, name: "Asus ProArt Studiobook 16 OLED (Ryzen 9 / RTX 4070)", price: 124900000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=ProArt+Studiobook+16" },
  { id: 28, name: "HP Omen 16 (Ryzen 9 / RTX 4080)", price: 109900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=HP+Omen+16" },
  { id: 29, name: "MSI GT77 Titan (i9 / RTX 4090)", price: 189900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=GT77+Titan+4090" }
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
