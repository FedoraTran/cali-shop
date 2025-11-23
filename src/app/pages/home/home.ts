import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product.service';
import { ProductFilterService } from '../../product-filter.service';

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
  private readonly filterService = inject(ProductFilterService);

  // State Signals
  readonly activeCategory = signal('all');
  readonly keyword = this.filterService.keyword;
  readonly sortMode = this.filterService.sortMode;

  private readonly products = toSignal(this.productService.getProducts(), {
    initialValue: [] as Product[],
  });

  // Computed Signal for filtered and sorted products
  readonly filteredProducts = computed(() => {
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

  constructor() {
    // Sync category from 'cat' query param
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
