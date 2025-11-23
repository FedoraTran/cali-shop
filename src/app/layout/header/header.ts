import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AsyncPipe, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  protected readonly user$: Observable<User | null> = this.authService.user$;

  // Danh mục sản phẩm và trạng thái menu
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

  constructor(private route: ActivatedRoute, private router: Router) {
    // Lắng nghe thay đổi query param 'cat' để đồng bộ hiển thị
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
    // Điều hướng cập nhật param; nếu đang ở trang chi tiết vẫn chuyển về home để thấy thay đổi danh sách
    this.router.navigate(['/'], { queryParams: { cat: key === 'all' ? null : key } });
  }

  protected logout(): void {
    this.authService.logout();
  }
}
