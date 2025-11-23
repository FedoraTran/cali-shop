import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  // State Signals
  activeCategory = signal('all');
  keyword = signal('');
  sortMode = signal('default');
  showCategoryMenu = signal(false);

  private readonly products = toSignal(this.productService.getProducts(), {
    initialValue: [] as Product[],
  });

  // Computed Signal for filtered and sorted products
  filteredProducts = computed(() => {
    const category = this.activeCategory();
    const search = this.keyword().trim().toLowerCase();
    const sort = this.sortMode();

    let products = this.products().filter(p => {
      const matchCategory = category === 'all' || p.category === category;
      const matchKeyword = !search || p.name.toLowerCase().includes(search);
      return matchCategory && matchKeyword;
    });

    if (sort === 'asc') {
      products = products.sort((a, b) => a.price - b.price);
    } else if (sort === 'desc') {
      products = products.sort((a, b) => b.price - a.price);
    }

    return products;
  });

  // Methods to update state
  setCategory(category: string) {
    this.activeCategory.set(category);
    // Đóng menu sau khi chọn
    this.showCategoryMenu.set(false);
    // Cập nhật query param để đồng bộ URL (có thể share link)
    this.router.navigate([], { queryParams: { cat: category === 'all' ? null : category }, queryParamsHandling: 'merge' });
  }

  toggleCategoryMenu() {
    this.showCategoryMenu.update(v => !v);
  }

  constructor() {
    // Đồng bộ category từ query param 'cat'
    this.route.queryParamMap.subscribe(map => {
      const cat = map.get('cat');
      if (cat && ['gaming','van-phong','design'].includes(cat)) {
        this.activeCategory.set(cat);
      } else if (!cat) {
        this.activeCategory.set('all');
      }
    });
  }

  // Helper methods for template
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
