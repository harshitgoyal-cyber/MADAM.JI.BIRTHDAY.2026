import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  @ViewChild('birthdaySong') private birthdaySong?: ElementRef<HTMLAudioElement>;

  protected readonly songUrl = '/Maiyya%20Do%20Patti%20Sachet%20%26%20Parampara%20Trending%202025%20-%20Vaibhav%20Sharma%20%28128k%29.mp3';

  constructor(private readonly router: Router) {}

  ngAfterViewInit(): void {
    if (!this.router.url.startsWith('/celebrate')) {
      this.startMusic();
    }
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event) => {
      if (event.urlAfterRedirects.startsWith('/celebrate')) {
        this.birthdaySong?.nativeElement.pause();
      } else {
        this.startMusic();
      }
    });
  }

  @HostListener('document:click')
  @HostListener('document:keydown')
  @HostListener('document:touchstart')
  resumeMusic(): void {
    this.startMusic();
  }

  private startMusic(): void {
    if (this.router.url.startsWith('/celebrate')) {
      return;
    }
    const audio = this.birthdaySong?.nativeElement;
    if (audio?.paused) {
      void audio.play().catch(() => undefined);
    }
  }
}
