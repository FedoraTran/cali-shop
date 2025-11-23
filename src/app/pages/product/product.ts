import { ChangeDetectionStrategy, Component, computed, inject, signal, effect } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductService } from '../../product.service';
import { map, switchMap } from 'rxjs';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  private readonly productService = inject(ProductService);
  private readonly route = inject(ActivatedRoute);

  private readonly productData$ = this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.productService.getProductById(id);
    })
  );

  readonly product = toSignal(this.productData$);
  readonly activeImage = signal<string | undefined>(undefined);

  // Get related products (same category, excluding the current one)
  readonly relatedProducts = toSignal(
    this.productService.getProducts().pipe(
      map(products => {
        const currentProduct = this.product();
        if (!currentProduct) return [];
        return products.filter(
          p => p.category === currentProduct.category && p.id !== currentProduct.id
        );
      })
    ), { initialValue: [] as Product[] }
  );

  // Computed signal for 4 related products to display
  readonly displayedRelatedProducts = computed(() => {
    return this.relatedProducts()?.slice(0, 4) || [];
  });

  readonly discountPercent = computed(() => {
    const p = this.product();
    if (!p || !p.oldPrice) return 0;
    return Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
  });

  readonly hasTechSpecs = computed(() => !!this.product()?.techSpecs?.length);
  readonly showTechSpecs = signal<boolean>(true);

  constructor() {
    effect(() => {
      this.activeImage.set(this.product()?.image);
    });
  }

  formatPrice(price: number | undefined): string {
    if (price === undefined) {
      return '';
    }
    return price.toLocaleString('vi-VN') + '₫';
  }

  labelCategory(cat: string | undefined): string {
    if (!cat) return '';
    switch (cat) {
      case "gaming": return "Gaming";
      case "van-phong": return "Văn Phòng";
      case "design": return "Design";
      default: return cat;
    }
  }

  toggleTechSpecs() {
    this.showTechSpecs.update(v => !v);
  }

  setActiveImage(img: string) {
    this.activeImage.set(img);
  }
}
