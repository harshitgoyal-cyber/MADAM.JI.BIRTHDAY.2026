import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StoryComponent } from './story/story.component';
import { MemoriesComponent } from './memories/memories.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { WishBoxComponent } from './wish-box/wish-box.component';
import { MyWishesComponent } from './my-wishes/my-wishes.component';

export const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'story', component: StoryComponent },
	{ path: 'memories', component: MemoriesComponent },
	{ path: 'celebrate', component: CelebrateComponent },
	{ path: 'wish-box', component: WishBoxComponent },
	{ path: 'my-wishes', component: MyWishesComponent },
	{ path: '**', redirectTo: '' },
];
