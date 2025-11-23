import { Component, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { productsData } from '../../data';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// Interfaces để làm rõ kiểu dữ liệu sản phẩm & thông số kỹ thuật
export interface ProductSpecItem { label: string; value: string; }
export interface ProductSpecCategory { name: string; items: ProductSpecItem[]; }
export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  specs: string[];
  desc: string;
  images: string[];
  techSpecs?: ProductSpecCategory[];
}

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class ProductComponent {
  // Signals
  product = signal<Product | null>(null);
  activeImage = signal<string | null>(null);
  // Hiển thị / ẩn toàn bộ khối thông số kỹ thuật (có thể mở rộng nếu cần tab sau này)
  showTechSpecs = signal<boolean>(true);

  // Computed values
  discountPercent = computed(() => {
    const p = this.product();
    if (!p || !p.oldPrice) return 0;
    return Math.round((p.oldPrice - p.price) / p.oldPrice * 100);
  });

  hasTechSpecs = computed(() => !!this.product()?.techSpecs?.length);

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id')!, 10);
      const foundProduct = productsData.find(p => p.id === id);
      
      if (foundProduct) {
        this.product.set(foundProduct);
        if (foundProduct.images && foundProduct.images.length > 0) {
          this.activeImage.set(foundProduct.images[0]);
        } else {
          this.activeImage.set(null);
        }
      } else {
        this.product.set(null);
      }
    });
  }

  // Methods
  setActiveImage(url: string) {
    this.activeImage.set(url);
  }

  toggleTechSpecs() {
    this.showTechSpecs.update(v => !v);
  }

  labelCategory(cat: string): string {
    switch (cat) {
      case "gaming": return "Gaming";
      case "van-phong": return "Văn Phòng";
      case "design": return "Design";
      default: return cat;
    }
  }

  formatPrice(price: number): string {
    return price.toLocaleString("vi-VN") + "₫";
  }
}
