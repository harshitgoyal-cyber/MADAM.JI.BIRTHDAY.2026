import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

type StoryMoment = {
  date: string;
  title: string;
  text: string;
  image: string;
  emoji: string;
};

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss',
})
export class StoryComponent {
  readonly moments: StoryMoment[] = [
    { date: '10 July', title: 'Friendship begins', text: 'Usne pehli baar best-friend wali reel bheji. Ek chhoti si reel, aur ek bahut special beginning.', image: '/story-01.jpg', emoji: '⭐' },
    { date: '4 August', title: 'The first friendship band', text: 'Pehli baar kisi ladki ne friendship band diya, aur woh bhi meri crush ne. Us din ki khushi alag hi thi.', image: '/story-02.jpg', emoji: '💓' },
    { date: '10 August', title: 'One month of us', text: 'Humari friendship ko ek month complete hua. Beech mein ladhaiyan bhi aayi, par hum phir bhi ek doosre ke paas rahe.', image: '/story-03.jpg', emoji: '🫂' },
    { date: '16 August', title: 'Madam jii returns', text: 'Baat band hone ke baad Madam jii ne @bawari naam se new ID banayi. Shayad kuch log door jaakar bhi door nahi hote.', image: '/story-04.jpg', emoji: '💝' },
    { date: '23–25 September', title: 'Gifts, mandir and a rose', text: 'Watch aur chocolate exchange hui, phir hum akele mandir gaye. Pehli baar kisi ladki ko rose diya, duniya ki sabse pyaari ladki ko.', image: '/story-05.jpg', emoji: '🌹' },
    { date: '28 October', title: 'Eight hours of silence', text: 'Hum dono continuously online the, lekin baat nahi kar rahe the. Ek ladhai jo bahut lambi thi, par feelings usse bhi zyada strong thi.', image: '/story-06.jpg', emoji: '🌙' },
    { date: '6 November', title: 'The gift I was waiting for', text: 'Bawari ne mujhe meri life ka sabse special gift diya. Uske words ne woh sab keh diya jo hum dono himmat karke nahi keh pa rahe the.', image: '/story-07.jpg', emoji: '💌' },
    { date: '7 November', title: 'The truth at 5:46', text: 'Usne poocha, “sach kab bata rahe ho?” Shaam 5:46 par darr ke saath sab sach keh diya. Aur usne bhi apne dil ki baat bata di.', image: '/story-08.jpg', emoji: '❤️' },
    { date: '9–17 November', title: 'Firsts we kept', text: 'Pehla rose, chocolates, ek can se cold drink, long calls, golgappe, mandir aur ice cream. Har din apni ek chhoti memory ban gaya.', image: '/story-09.jpg', emoji: '🍦' },
    { date: '7 December – 14 February', title: 'Growing together', text: 'Pehla month, unexpected calls, almost three-hour conversations, New Year mandir ke saath aur pehla Valentine — bahut saara pyaar.', image: '/story-10.jpg', emoji: '✨' },
    { date: '27 March – 31 March', title: 'Break, then patch up', text: 'Pehla breakup hua, phir 31 March ko patch up. Kabhi kabhi relationship bachane ke liye dono ko thoda aur honestly ladna padta hai.', image: '/story-11.jpg', emoji: '🎀' },
    { date: '10 July – 2 December', title: 'One year and more firsts', text: 'Ek saal poora hua, first movie date, kurti wali photo, pasta, birthday surprise, first date, clean shave, pizza aur pehli kisses.', image: '/story-12.jpg', emoji: '🫠' },
    { date: '8–10 June 2026', title: 'Our most beautiful days', text: 'Saath mein bilkul paas baithna, first kiss, aur Khetam ghoomna. Bawari ne meri life ka sabse khoobsurat din bana diya.', image: '/story-13.jpg', emoji: '💋' },
  ];

  readonly availableImages = new Set<number>();

  constructor(private readonly router: Router) {}

  imageLoaded(index: number): void {
    this.availableImages.add(index);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  logout(): void {
    this.router.navigate(['/']);
  }
}
