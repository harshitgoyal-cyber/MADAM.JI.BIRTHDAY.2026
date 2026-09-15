import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

type Memory = {
  date: string;
  title: string;
  note: string;
  emoji: string;
  image: string;
};

@Component({
  selector: 'app-memories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.scss',
})
export class MemoriesComponent {
  readonly memories: Memory[] = [
    { date: '13 July', title: 'The mandir reason', note: 'Usne mujhe apne mandir jaane ka reason bataya. Chhoti si baat thi, par mujhe laga woh apni duniya ka ek aur door khol rahi hai.', emoji: '🛕', image: '/memory-01.jpg' },
    { date: '14–16 August', title: 'Three days of ladhai', note: 'Bahut zyada ladhai hui humare beech. Phir bhi 16 August ko @bawari wapas aa gayi. Kuch connections naraz hokar bhi toot-te nahi.', emoji: '🌧️', image: '/memory-02.jpg' },
    { date: '10 September', title: 'Two months of friendship', note: 'Humari friendship ko do months complete hue. Har din ke saath woh meri favourite person banti ja rahi thi.', emoji: '⭐', image: '/memory-03.jpg' },
    { date: '29 September', title: 'Almost said it', note: 'Maine try kiya sab batane ka, par darr gaya ki kahin friendship bhi khatam na ho jaaye. Dil ki baat phir thodi der ke liye ruk gayi.', emoji: '🤍', image: '/memory-04.jpg' },
    { date: '31 October', title: 'Gifts we remembered', note: 'Maine lighting gift di, aur usne mujhe chocolate aur woh bahut accha perfume diya. Gifts se zyada yaad unke peeche ki feeling hai.', emoji: '🎁', image: '/memory-05.jpg' },
    { date: '5 November', title: 'One more almost-confession', note: 'Aaj sab sach batane wala tha, lekin phir wahi himmat nahi hui. Kabhi kabhi pyaar ko words tak aane mein time lagta hai.', emoji: '🕯️', image: '/memory-06.jpg' },
    { date: '10–14 November', title: 'Chocolate moments', note: 'Usne phir chocolate di, aur humne ek doosre ko chocolate khilayi. Simple moments, jo ab sabse sweet memories hain.', emoji: '🍫', image: '/memory-07.jpg' },
    { date: '11 November', title: 'One can, one long call', note: 'Ek can se cold drink pi aur almost ek ghante tak chats nahi, call par baat kari. Us din silence bhi comfortable tha.', emoji: '🥤', image: '/memory-08.jpg' },
    { date: '16–17 November', title: 'Golgappe, mandir and ice cream', note: 'Saath mein golgappe khaye, phir mandir gaye aur ice cream. Ordinary day tha, par tumhare saath extraordinary ban gaya.', emoji: '🍦', image: '/memory-09.jpg' },
    { date: '24 November', title: 'Our first relationship fight', note: 'Plan bhool gaya tha, maine overreact kar diya. Pehli relationship fight thi, aur usne humein aur honestly samajhna sikhaya.', emoji: '🌷', image: '/memory-10.jpg' },
    { date: '5 December', title: 'Bawari ka sandwich', note: 'Maine tumhare haath ka bana sandwich khaya. Pyaar kabhi kabhi kisi recipe mein nahi, kisi ke effort mein hota hai.', emoji: '🥪', image: '/memory-11.jpg' },
    { date: '8–13 December', title: 'Calls that ran for hours', note: '54 minutes, 23 minutes, 173 minutes aur 129 minutes. Calls chhoti-badi nahi thi, har call mein tum thodi aur close lagti thi.', emoji: '📞', image: '/memory-12.jpg' },
    { date: '25 July – 13 September', title: 'Our everyday magic', note: 'Apne-apne ghar se first movie date, kurti wali photo, TT mein first prize aur tumhare haath ka white sauce pasta. Tumhari khushiyan meri favourite hain.', emoji: '✨', image: '/memory-13.jpg' },
  ];

  readonly availableImages = new Set<number>();

  constructor(private readonly router: Router) {}

  imageLoaded(index: number): void {
    this.availableImages.add(index);
  }

  logout(): void {
    this.router.navigate(['/']);
  }
}
