import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishEntry, WishesService } from '../wishes.service';

@Component({
  selector: 'app-my-wishes',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './my-wishes.component.html',
  styleUrl: './my-wishes.component.scss',
})
export class MyWishesComponent {
  wishes: WishEntry[] = [];
  loading = true;
  error = '';

  constructor(private readonly wishesService: WishesService) {
    void this.loadWishes();
  }

  async loadWishes(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      this.wishes = await this.wishesService.list();
    } catch {
      this.error = 'Wishes load nahi hui. Firestore rules ya network check karo.';
    } finally {
      this.loading = false;
    }
  }
}
