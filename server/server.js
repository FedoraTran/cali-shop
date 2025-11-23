const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Dữ liệu sản phẩm giả (thay vì file data.ts ở frontend)
const products = [
 { id: 1, name: "ASUS ROG Strix SCAR 18 G835LW SA193W", price: 82990000, category: "gaming", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/336446/asus-rog-strix-scar-18-g835lx-ultra-9-sa193w-2-638792712349227762-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 9"}, {label:"Số nhân", value:"16"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 5080"}, {label:"VRAM", value:"16GB GDDR7"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"1TB PCIe 4.0 NVMe"}]}]},
  { id: 2, name: "ASUS ROG Zephyrus G16 GU605CX QR147W", price: 119990000, category: "gaming", image: "https://cdn.tgdd.vn/Products/Images/44/322427/asus-gaming-rog-zephyrus-g16-gu605mv-ultra-9-qr135w-1-1-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 9"}, {label:"Số nhân", value:"16"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 5090"}, {label:"VRAM", value:"24GB GDDR7"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB LPDDR5X"}, {label:"Ổ cứng", value:"2TB PCIe 4.0 NVMe"}]}]},
  { id: 3, name: "HP Elitebook X360 830 G11", price: 44390000, category: "van-phong", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/331523/hp-elitebook-x360-830-g11-ultra-7-a7rc0pt-1-638661786338705759-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 7 165U"}, {label:"Số nhân", value:"12"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"Intel Integrated Graphics"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"16GB LPDDR5"}, {label:"Ổ cứng", value:"512GB NVMe SSD"}]}]},
  { id: 4, name: "MacBook Pro 14 inch M5", price: 51790000, category: "van-phong", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/358089/macbook-pro-14-inch-m5-1-638962511548077123-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M5"}, {label:"Số nhân", value:"10"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"10 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"24GB Unified"}, {label:"Ổ cứng", value:"1TB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"14 inch"}, {label:"Loại", value:"Liquid Retina XDR"}]}, {name:"Cổng & kết nối", items:[{label:"Cổng", value:"MagSafe, 2x Thunderbolt 4, HDMI, Jack 3.5mm, SDXC"}, {label:"Wi-Fi/Bluetooth", value:"Wi-Fi 6E, Bluetooth 5.3"}]}, {name:"Pin & trọng lượng", items:[{label:"Pin", value:"Lên tới 18 giờ"}, {label:"Khối lượng", value:"1.6 kg"}]}]},
  { id: 5, name: "MSI Prestige 16 AI Studio B1VFG 082VN", price: 55990000, category: "design", image: "https://cdn.tgdd.vn/Products/Images/44/322958/msi-prestige-16-ai-studio-b1vfg-ultra-9-082vn-2-1-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4060"}, {label:"VRAM", value:"8GB GDDR6"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  { id: 6, name: "Lenovo Yoga Pro 7 14IMH9 83E2006MVN", price: 41990000, category: "design", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333196/lenovo-yoga-pro-7-14imh9-ultra-7-83e2006mvn-1-638701153555784968-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 7"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4050"}, {label:"VRAM", value:"6GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  { id: 7, name: "MSI Prestige 16 AI+ Mercedes AMG B2VMG", price: 49990000, category: "gaming", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/341572/msi-prestige-16-ai-mercedes-amg-b2vmg-ultra-9-288v-088vn-1-638904659240843868-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 9 Lunar Lake"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"Intel Arc Graphics"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe PCIe"}]}]},
  { id: 8, name: "Dell XPS 13 9350 - PP9H1", price: 64990000, category: "van-phong", image: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/342757/dell-xps-13-9350-ultra-7-258v-pp9h1-2-638917189604832011-750x500.jpg", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 7"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"Intel Arc Graphics"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB LPDDR5X"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  { id: 9, name: "Acer Swift X14 SFX14 72G 79UW", price: 48990000, category: "design", image: "https://product.hstatic.net/200000722513/product/ava_8884341ac5f14efb8e3a4710682698a2_master.png", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core Ultra 7"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4070"}, {label:"VRAM", value:"8GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB LPDDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  
  { id: 10, name: "MacBook Pro 14″ M5 (16GB / 512GB)", price: 52990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M5", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M5"}, {label:"Số nhân", value:"10"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"10 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"16GB Unified"}, {label:"Ổ cứng", value:"512GB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"14 inch"}, {label:"Loại", value:"Liquid Retina XDR"}]}]},
  
  { id: 11, name: "MacBook Pro 14″ M5 (24GB / 1TB)", price: 61990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M5+1TB", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M5"}, {label:"Số nhân", value:"10"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"10 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"24GB Unified"}, {label:"Ổ cứng", value:"1TB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"14 inch"}, {label:"Loại", value:"Liquid Retina XDR"}]}]},
  
  { id: 12, name: "MacBook Pro 14″ M4 Pro (24GB / 512GB)", price: 47890000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M4+Pro", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M4 Pro"}, {label:"Số nhân", value:"10"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"10 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"24GB Unified"}, {label:"Ổ cứng", value:"512GB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"14 inch"}, {label:"Loại", value:"Liquid Retina XDR"}]}]},
  
  { id: 13, name: "MacBook Pro 14″ M4 Pro (36GB / 1TB)", price: 63990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M4+Pro+1TB", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M4 Pro"}, {label:"Số nhân", value:"10"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"10 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"36GB Unified"}, {label:"Ổ cứng", value:"1TB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"14 inch"}, {label:"Loại", value:"Liquid Retina XDR"}]}]},
  
  { id: 14, name: "MacBook Pro 14″ M4 Max (48GB / 2TB)", price: 89990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Pro+14+M4+Max", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M4 Max"}, {label:"Số nhân", value:"12"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"12 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"48GB Unified"}, {label:"Ổ cứng", value:"2TB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"14 inch"}, {label:"Loại", value:"Liquid Retina XDR"}]}]},
  
  { id: 15, name: "MacBook Air 15″ M4 (24GB / 1TB)", price: 43990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=MacBook+Air+15+M4", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Apple M4"}, {label:"Số nhân", value:"8"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"8 nhân GPU"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"24GB Unified"}, {label:"Ổ cứng", value:"1TB SSD"}]}, {name:"Màn hình", items:[{label:"Kích thước", value:"15 inch"}, {label:"Loại", value:"Liquid Retina"}]}]},
  
  { id: 16, name: "Razer Blade 16 (2025) RTX 4090", price: 119900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Razer+Blade+16+4090", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4090"}, {label:"VRAM", value:"16GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  
  { id: 17, name: "Razer Blade 14 (Ryzen 9 / 32GB / 1TB)", price: 84990000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Razer+Blade+14+Ryzen+9", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"AMD Ryzen 9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4070"}, {label:"VRAM", value:"8GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  
  { id: 18, name: "Asus ROG Zephyrus Duo 16 GX650", price: 139900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=ROG+Zephyrus+Duo+16", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4090"}, {label:"VRAM", value:"16GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 19, name: "Acer Predator Triton 18 PT-18 RTX 4080", price: 109900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Predator+Triton+18+4080", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4080"}, {label:"VRAM", value:"16GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 20, name: "Lenovo Legion 9i (16″ / i9 / RTX 4090)", price: 124900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=Legion+9i+16+4090", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4090"}, {label:"VRAM", value:"16GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 21, name: "HP Spectre x360 16 (OLED / i7 / 32GB)", price: 79990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=Spectre+x360+16", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i7"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"Intel Iris Xe"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB LPDDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  
  { id: 22, name: "Asus Zenbook Pro 14 Duo OLED (i9 / 64GB)", price: 89990000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=Zenbook+Pro+14+Duo", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4070"}, {label:"VRAM", value:"12GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 23, name: "Lenovo ThinkPad X1 Carbon Gen 12 (i7 / 32GB)", price: 68990000, category: "van-phong", image: "https://via.placeholder.com/750x500?text=ThinkPad+X1+Carbon+Gen12", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i7"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"Intel Iris Xe"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB LPDDR5"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  
  { id: 24, name: "Lenovo ThinkPad P1 Gen 6 (i9 / RTX A3000)", price: 124900000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=ThinkPad+P1+Gen6", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX A3000"}, {label:"VRAM", value:"12GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 25, name: "Acer ConceptD 7 Ezel (i7 / RTX 3070)", price: 97990000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=ConceptD+7+Ezel", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i7"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 3070"}, {label:"VRAM", value:"8GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR4"}, {label:"Ổ cứng", value:"1TB NVMe"}]}]},
  
  { id: 26, name: "Gigabyte Aero 16 OLED (i9 / RTX 4080)", price: 134900000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=Aero+16+OLED", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4080"}, {label:"VRAM", value:"16GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 27, name: "Asus ProArt Studiobook 16 OLED (Ryzen 9 / RTX 4070)", price: 124900000, category: "thiet-ke", image: "https://via.placeholder.com/750x500?text=ProArt+Studiobook+16", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"AMD Ryzen 9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4070"}, {label:"VRAM", value:"12GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 28, name: "HP Omen 16 (Ryzen 9 / RTX 4080)", price: 109900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=HP+Omen+16", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"AMD Ryzen 9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4080"}, {label:"VRAM", value:"16GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"32GB DDR5"}, {label:"Ổ cứng", value:"2TB NVMe"}]}]},
  
  { id: 29, name: "MSI GT77 Titan (i9 / RTX 4090)", price: 189900000, category: "gaming", image: "https://via.placeholder.com/750x500?text=GT77+Titan+4090", techSpecs: [{name:"Bộ xử lý", items:[{label:"CPU", value:"Intel Core i9"}]}, {name:"Đồ hoạ (GPU)", items:[{label:"GPU", value:"NVIDIA RTX 4090"}, {label:"VRAM", value:"24GB"}]}, {name:"Bộ nhớ RAM, Ổ cứng", items:[{label:"RAM", value:"64GB DDR5"}, {label:"Ổ cứng", value:"4TB NVMe"}]}]}
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
