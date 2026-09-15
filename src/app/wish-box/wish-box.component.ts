import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { WishEntry, WishesService } from '../wishes.service';

@Component({
  selector: 'app-wish-box',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './wish-box.component.html',
  styleUrl: './wish-box.component.scss',
})
export class WishBoxComponent {
  wish = '';
  sender = '';
  saved = false;
  wishes: WishEntry[] = [];
  saving = false;
  saveError = '';
  revealedWishes: string[] = [];

  readonly jarWishes = [
    'Tum hamesha dil khol kar smile karti raho. ♡',
    'Humari har ladhai ka ending ek sweet patch-up ho.',
    'Har mandir morning aur har ice cream date yaadgar ho.',
    'Tumhare saare dreams dheere-dheere sach hote rahein.',
    'Bawari aur Harshit ki story hamesha beautiful rahe.',
    'Tumhe har birthday par aur zyada pyaar mile.',
    'Meri favourite person hamesha meri favourite rahe. 💗',
  ];

  readonly prompts = [
    'A wish for our next adventure...',
    'Something you want to do together...',
    'One tiny dream for this year...',
  ];

  constructor(private readonly router: Router, private readonly wishesService: WishesService) {
    void this.loadWishes();
  }

  async submitWish(): Promise<void> {
    const wish = this.wish.trim();
    if (!wish) {
      return;
    }

    this.saving = true;
    this.saveError = '';
    try {
      const entry = await this.wishesService.save(wish, this.sender.trim());
      this.wishes = [entry, ...this.wishes];
      this.wish = '';
      this.sender = '';
      this.saved = true;
    } catch {
      this.saveError = 'Wish save nahi hui. Firebase Firestore rules check karo.';
    } finally {
      this.saving = false;
    }
  }

  clearSavedMessage(): void {
    this.saved = false;
  }

  revealNextWish(): void {
    if (this.revealedWishes.length < this.jarWishes.length) {
      this.revealedWishes = [...this.revealedWishes, this.jarWishes[this.revealedWishes.length]];
    }
  }

  logout(): void {
    this.router.navigate(['/']);
  }

  private async loadWishes(): Promise<void> {
    try {
      this.wishes = await this.wishesService.list();
    } catch {
      this.wishes = [];
    }
  }
}
