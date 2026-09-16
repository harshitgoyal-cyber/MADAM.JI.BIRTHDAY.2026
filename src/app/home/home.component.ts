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
    { title: 'First Date', emoji: '🌹', image: './Snapchat-1191154575.jpg' },
    { title: 'Our Adventures', emoji: '✈️', image: './Snapchat-1550100915.jpg' },
    { title: 'Sunset Walks', emoji: '🌅', image: './Snapchat-922814862.jpg' },
    { title: 'Little Celebrations', emoji: '✨', image: './8.jpg' },
    { title: 'Laughing Together', emoji: '😊', image: './Snapchat-741666838.jpg' },
    { title: 'My Favourite Smile', emoji: '❤️', image: './IMG_20260101_191636_737.jpg' },
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
