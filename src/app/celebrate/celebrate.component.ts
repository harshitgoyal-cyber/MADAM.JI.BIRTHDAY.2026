import { AfterViewInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-celebrate',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './celebrate.component.html',
  styleUrl: './celebrate.component.scss',
})
export class CelebrateComponent implements AfterViewInit {
  @ViewChild('celebrationSong') private celebrationSong?: ElementRef<HTMLAudioElement>;
  @ViewChild('voiceNote') private voiceNote?: ElementRef<HTMLAudioElement>;

  readonly songUrl = './Tere%20Bin%20%28Lyrics%29%20-%20Rahat%20Fateh%20Ali%20Khan%2C%20Asees%20Kaur%20%F0%9F%8E%B6%20Ore%20piya%20main%20to%20tere%20liye%20sau%20raat%20jaga%E2%9C%A8%20-%20Sankalp%20Lyrics%20%28128k%29.mp3';
  readonly voiceNoteUrl = './voice-note.mp3';
  readonly wished = signal(false);
  readonly selectedSurprise = signal('');

  ngAfterViewInit(): void {
    const song = this.celebrationSong?.nativeElement;
    const voiceNote = this.voiceNote?.nativeElement;
    voiceNote?.addEventListener('ended', () => this.resumeSong());
    void song?.play().catch(() => undefined);
  }

  resumeSong(): void {
    const song = this.celebrationSong?.nativeElement;
    if (song?.paused) {
      void song.play().catch(() => undefined);
    }
  }

  playVoiceNote(): void {
    const voiceNote = this.voiceNote?.nativeElement;
    if (!voiceNote) {
      return;
    }

    if (voiceNote.paused) {
      this.celebrationSong?.nativeElement.pause();
      void voiceNote.play().catch(() => undefined);
    } else {
      voiceNote.pause();
      this.resumeSong();
    }
  }

  makeWish(): void {
    this.wished.set(true);
  }

  chooseSurprise(choice: string): void {
    this.selectedSurprise.set(choice);
  }
}
