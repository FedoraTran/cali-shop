// Dữ liệu sản phẩm dùng chung cho index và trang chi tiết
export const productsData = [
  {
    id: 1,
    title: "ASUS ROG Strix SCAR 18 G835LW SA193W",
    category: "gaming",
    price: 82990000,
    oldPrice: 88390000,
    specs: ["Core™ Ultra 9","32GB DDR5","RTX 5080","1TB PCIe® 4.0 NVMe™ "],
    desc: "Chiến mọi loại game với hiệu suât mạnh nhất.",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/336446/asus-rog-strix-scar-18-g835lx-ultra-9-sa193w-2-638792712349227762-750x500.jpg"
    ],
    techSpecs: [
      {
        name: "Bộ xử lý",
        items: [
          { label: "CPU", value: "Intel Core™ Ultra 9" },
          { label: "Số nhân", value: "16" },
          { label: "Tiến trình", value: "Intel 4" },
          { label: "TDP", value: "55W" }
        ]
      },
      {
        name: "Đồ hoạ (GPU)",
        items: [
          { label: "GPU", value: "NVIDIA® GeForce RTX™ 5080" },
          { label: "VRAM", value: "16GB GDDR7" }
        ]
      },
      {
        name: "Bộ nhớ RAM, Ổ cứng",
        items: [
          { label: "RAM", value: "32GB DDR5 5600" },
          { label: "Khe RAM", value: "2 khe (nâng tối đa 64GB)" },
          { label: "Ổ cứng", value: "1TB PCIe 4.0 NVMe (nâng tối đa 4TB)" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "ASUS ROG Zephyrus G16 GU605CX QR147W",
    category: "gaming",
    price: 119990000,
    oldPrice: 124690000,
    specs: ["Core™ Ultra 9","64GB LPDDR5X 7467 on board","RTX 5090","2TB PCIe® 4.0 NVMe™"],
    desc: "Quá mạnh không cần nhận xét.",
    images: [
      "https://cdn.tgdd.vn/Products/Images/44/322427/asus-gaming-rog-zephyrus-g16-gu605mv-ultra-9-qr135w-1-1-750x500.jpg"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [
        { label: "CPU", value: "Intel Core™ Ultra 9" },
        { label: "Số nhân", value: "16" },
        { label: "Tiến trình", value: "Intel 4" }
      ]},
      { name: "Đồ hoạ (GPU)", items: [
        { label: "GPU", value: "NVIDIA® GeForce RTX™ 5090" },
        { label: "VRAM", value: "24GB GDDR7" }
      ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [
        { label: "RAM", value: "64GB LPDDR5X 7467MHz (Onboard)" },
        { label: "Ổ cứng", value: "2TB PCIe 4.0 NVMe" }
      ]},
      { name: "Màn hình", items: [
        { label: "Kích thước", value: "16" },
        { label: "Độ phân giải", value: "2.5K (2560x1600)" },
        { label: "Tần số quét", value: "240Hz" }
      ]}
    ]
  },
  {
    id: 3,
    title: "HP Elitebook X360 830 G11 ",
    category: "van-phong",
    price: 44390000,
    oldPrice: 48090000,
    specs: ["Ultra 7 165U","16GB LPDDR5 (Onboard)","Intel Graphics","512GB SSD NVMe"],
    desc: "Mỏng nhẹ, pin trâu, tối ưu cho tác vụ văn phòng.",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/331523/hp-elitebook-x360-830-g11-ultra-7-a7rc0pt-1-638661786338705759-750x500.jpg"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [
        { label: "CPU", value: "Intel Core™ Ultra 7 165U" },
        { label: "Số nhân", value: "12" },
        { label: "TDP", value: "28W" }
      ]},
      { name: "Đồ hoạ (GPU)", items: [
        { label: "GPU", value: "Intel Integrated Graphics" }
      ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [
        { label: "RAM", value: "16GB LPDDR5 (Onboard)" },
        { label: "Ổ cứng", value: "512GB NVMe SSD" }
      ]},
      { name: "Màn hình", items: [
        { label: "Loại", value: "13.3" },
        { label: "Đặc điểm", value: "Cảm ứng xoay 360°" }
      ]}
    ]
  },
  {
    id: 4,
    title: "MacBook Pro 14 inch M5",
    category: "van-phong",
    price: 51790000,
    oldPrice: 53790000,
    specs: ["Apple m5","24 GB","10 nhân GPU","1TB SSD"],
    desc: "Đa nhiệm mượt, bảo mật vân tay, gọn.",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/358089/macbook-pro-14-inch-m5-1-638962511548077123-750x500.jpg"
    ],
    // Thông số kỹ thuật chi tiết (theo ảnh demo)
    techSpecs: [
      {
        name: "Bộ xử lý",
        items: [
          { label: "Công nghệ CPU", value: "Apple M5 - Hãng không công bố" },
          { label: "Số nhân", value: "10" },
          { label: "Số lượng", value: "Hãng không công bố" },
          { label: "Tốc độ CPU", value: "153 GB/s memory bandwidth" }
        ]
      },
      {
        name: "Đồ hoạ (GPU)",
        items: [
          { label: "GPU", value: "10 nhân GPU" }
        ]
      },
      {
        name: "Bộ nhớ RAM, Ổ cứng",
        items: [
          { label: "RAM", value: "24GB hợp nhất (Unified Memory)" },
          { label: "Ổ cứng", value: "1TB SSD" }
        ]
      },
      {
        name: "Màn hình",
        items: [
          { label: "Kích thước", value: "14 inch" },
          { label: "Loại", value: "Liquid Retina XDR" },
          { label: "Độ phân giải", value: "3024 x 1964" }
        ]
      },
      {
        name: "Cổng kết nối & mở rộng",
        items: [
          { label: "Cổng", value: "MagSafe, 2x Thunderbolt 4, HDMI, Jack 3.5mm, SDXC" },
          { label: "Không dây", value: "Wi‑Fi 6E, Bluetooth 5.3" }
        ]
      },
      {
        name: "Kích thước - Khối lượng - Pin",
        items: [
          { label: "Kích thước", value: "1.55 x 31.26 x 22.12 cm" },
          { label: "Khối lượng", value: "1.6 kg" },
          { label: "Pin", value: "Lên tới 18 giờ" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "MSI Prestige 16 AI Studio B1VFG 082VN",
    category: "design",
    price: 55990000,
    oldPrice: 57890000,
    specs: ["Core™ Ultra 9","32GB DDR5","RTX 4060","1TB NVMe"],
    desc: "Thiết kế đầy tinh tế và tối ưu, Sức mạnh xử lý tối thượng đến từ AI",
    images: [
      "https://cdn.tgdd.vn/Products/Images/44/322958/msi-prestige-16-ai-studio-b1vfg-ultra-9-082vn-2-1-750x500.jpg"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [
        { label: "CPU", value: "Intel Core™ Ultra 9" }
      ]},
      { name: "Đồ hoạ (GPU)", items: [
        { label: "GPU", value: "NVIDIA® GeForce RTX™ 4060" },
        { label: "VRAM", value: "8GB GDDR6" }
      ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [
        { label: "RAM", value: "32GB DDR5 5600" },
        { label: "Ổ cứng", value: "1TB NVMe" }
      ]}
    ]
  },
  {
    id: 6,
    title: "Lenovo Yoga Pro 7 14IMH9 83E2006MVN",
    category: "design",
    price: 41990000,
    oldPrice: 47290000,
    specs: ["Core™ Ultra 7 ","32GB DDR5","RTX 4050","1TB NVMe"],
    desc: "Màn OLED chuẩn màu, đa dạng cổng kết nối.",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/333196/lenovo-yoga-pro-7-14imh9-ultra-7-83e2006mvn-1-638701153555784968-750x500.jpg"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [ { label: "CPU", value: "Intel Core™ Ultra 7" } ]},
      { name: "Đồ hoạ (GPU)", items: [ { label: "GPU", value: "NVIDIA® GeForce RTX™ 4050" }, { label: "VRAM", value: "6GB" } ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [ { label: "RAM", value: "32GB DDR5" }, { label: "Ổ cứng", value: "1TB NVMe" } ]},
      { name: "Màn hình", items: [ { label: "Loại", value: "14" }, { label: "Công nghệ", value: "OLED chuẩn màu" } ]}
    ]
  },
  {
    id: 7,
    title: " MSI Prestige 16 AI+ Mercedes AMG B2VMG ",
    category: "gaming",
    price: 49990000,
    oldPrice: 55890000,
    specs: ["Core Ultra 9 Lunar Lake","32GB DDR5","Intel Arc Graphics","2 TB SSD NVMe PCIe"],
    desc: "Dành cho người chơi muốn tối đa FPS và đồ họa.",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/341572/msi-prestige-16-ai-mercedes-amg-b2vmg-ultra-9-288v-088vn-1-638904659240843868-750x500.jpg"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [ { label: "CPU", value: "Intel Core Ultra 9 Lunar Lake" } ]},
      { name: "Đồ hoạ (GPU)", items: [ { label: "GPU", value: "Intel Arc Graphics" } ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [ { label: "RAM", value: "32GB DDR5" }, { label: "Ổ cứng", value: "2TB NVMe PCIe" } ]}
    ]
  },
  {
    id: 8,
    title: "Dell XPS 13 9350 - PP9H1",
    category: "van-phong",
    price: 64990000,
    oldPrice: 68990000,
    specs: ["Core Ultra 7 Lunar Lake","32GB DDR5X","Intel Arc Graphics","1TB NVMe"],
    desc: "Thiết kế tối giản, khởi động nhanh,mỏng,nhẹ .",
    images: [
      "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/342757/dell-xps-13-9350-ultra-7-258v-pp9h1-2-638917189604832011-750x500.jpg"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [ { label: "CPU", value: "Intel Core Ultra 7" } ]},
      { name: "Đồ hoạ (GPU)", items: [ { label: "GPU", value: "Intel Arc Graphics" } ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [ { label: "RAM", value: "32GB LPDDR5X" }, { label: "Ổ cứng", value: "1TB NVMe" } ]},
      { name: "Màn hình", items: [ { label: "Kích thước", value: "13" }, { label: "Độ phân giải", value: "3K" } ]}
    ]
  },
  {
    id: 9,
    title: "Acer Swift X14 SFX14 72G 79UW",
    category: "design",
    price: 48990000,
    oldPrice: 53990000,
    specs: ["Core™ Ultra 7 ","32GB LPDDR5 Onboard 6400Mhz","RTX 4070","1TB NVMe"],
    desc: "Tối ưu render video và xử lý ảnh độ phân giải cao.",
    images: [
      "https://product.hstatic.net/200000722513/product/ava_8884341ac5f14efb8e3a4710682698a2_master.png"
    ],
    techSpecs: [
      { name: "Bộ xử lý", items: [ { label: "CPU", value: "Intel Core™ Ultra 7" } ]},
      { name: "Đồ hoạ (GPU)", items: [ { label: "GPU", value: "NVIDIA® GeForce RTX™ 4070" }, { label: "VRAM", value: "8GB" } ]},
      { name: "Bộ nhớ RAM, Ổ cứng", items: [ { label: "RAM", value: "32GB LPDDR5 6400MHz (Onboard)" }, { label: "Ổ cứng", value: "1TB NVMe" } ]}
    ]
  }
];
