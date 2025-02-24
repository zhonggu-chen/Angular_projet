import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddGameComponent} from './components/add-game/add-game.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GameListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'add-game', component: AddGameComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
