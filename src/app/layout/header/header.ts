import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthService } from '../../auth.service';
import { ProductFilterService } from '../../product-filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe, CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly filterService = inject(ProductFilterService);

  protected readonly user$: Observable<User | null> = this.authService.user$;

  // Product categories and menu state
  categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'gaming', label: 'Gaming' },
    { key: 'van-phong', label: 'Văn Phòng' },
    { key: 'design', label: 'Design' }
  ];
  showCategoryMenu = signal(false);
  activeCategory = signal('all');

  currentCategoryLabel = computed(() => {
    const cat = this.activeCategory();
    const found = this.categories.find(c => c.key === cat);
    return found ? found.label : cat;
  });

  constructor() {
    // Sync category from 'cat' query param
    this.route.queryParamMap.subscribe(map => {
      const cat = map.get('cat');
      if (cat && ['gaming','van-phong','design'].includes(cat)) {
        this.activeCategory.set(cat);
      } else {
        this.activeCategory.set('all');
      }
    });
  }

  toggleCategoryMenu() {
    this.showCategoryMenu.update(v => !v);
  }

  selectCategory(key: string) {
    this.activeCategory.set(key);
    this.showCategoryMenu.set(false);
    // Navigate and update param; switch to home page if on a detail page
    this.router.navigate(['/'], { queryParams: { cat: key === 'all' ? null : key } });
  }

  onSearchChange(event: Event) {
    const keyword = (event.target as HTMLInputElement).value;
    this.filterService.keyword.set(keyword);
  }

  onSortChange(event: Event) {
    const sortMode = (event.target as HTMLSelectElement).value;
    this.filterService.sortMode.set(sortMode);
  }

  protected logout(): void {
    this.authService.logout();
  }
}
