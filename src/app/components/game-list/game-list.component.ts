import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../../core/services/game.service';
import { Game } from '../../core/models/game.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  standalone: false
})
export class GameListComponent implements OnInit {
  games$: Observable<Game[]> = new Observable<Game[]>();

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    this.games$ = this.gameService.getGames();
  }
}
