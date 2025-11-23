import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductFilterService {
  keyword = signal('');
  sortMode = signal('default'); // 'default', 'asc', 'desc'
}
