import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly memories = [
    { title: 'First Date', emoji: '🌹', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=700&q=85' },
    { title: 'Our Adventures', emoji: '✈️', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85' },
    { title: 'Sunset Walks', emoji: '🌅', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85' },
    { title: 'Little Celebrations', emoji: '✨', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=85' },
    { title: 'Laughing Together', emoji: '😊', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=700&q=85' },
    { title: 'My Favourite Smile', emoji: '❤️', image: 'https://images.unsplash.com/photo-1496440737103-cd596325d314?auto=format&fit=crop&w=700&q=85' },
  ];

  readonly gifts = [
    { title: 'Birthday Playlist', icon: '♫', emoji: '🎵' },
    { title: 'Special Dinner Date', icon: '♨', emoji: '🌹' },
    { title: 'Weekend Getaway', icon: '✈', emoji: '✈️' },
  ];

  selectedGift = '';

  constructor(private readonly router: Router) {}

  revealSurprise(): void {
    document.querySelector('#gifts')?.scrollIntoView({ behavior: 'smooth' });
  }

  chooseGift(title: string): void {
    this.selectedGift = title;
  }

  logout(): void {
    this.router.navigate(['/']);
  }
}
