import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from '../models/game.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gamesSubject: BehaviorSubject<Game[]>;
  games$: Observable<Game[]>;

  constructor() {
    const initialGames: Game[] = [
      {
        id: 1,
        name: 'League of lLegends',
        type: 'MOBA',
        platform: 'PC',
        players: '5v5',
        description: 'Un jeu compétitif en équipe très stratégique qui vous offre des affrontements intenses et des tactiques époustouflantes. Que vous soyez débutant ou vétéran, il y a une bataille qui vous attend！',
        image: 'assets/LOL.jpg',
        reviews: [{username: 'Oscar', content: '"League of Legends, c\'est un jeu auquel je peux pas résister, chaque partie est pleine de surprises !"'}],
        rating: 9.2,
        releaseDate: '2009-10-27'
      },
      {
        id: 2,
        name: 'Vallorant',
        type: 'Tir',
        platform: 'PC',
        players: '5v5',
        description: 'Jeu de tir à la première personne (FPS) combinant tirs tactiques et capacités de héros, mettant l\'accent sur la coopération en équipe et les réactions rapides. Venez choisir votre agent et dominer le champ de bataille !',
        image: 'assets/val.jpg',
        reviews: [{username: 'Hugo', content: 'La profondeur tactique de Valorant me fait kiffer, le teamwork c\'est la clé de la victoire !'}],
        rating: 8.7,
        releaseDate: '2020-06-02'
      },
      {
        id: 3,
        name: 'Genshin',
        type: 'Monde ouvert',
        platform: 'PC',
        players: 'Solo/Multijoueur',
        description: 'Le jeu propose un environnement de monde ouvert aux graphismes animés, avec un modèle de jeu gratuit incluant des achats intégrés pour les tirages au sort.',
        image: 'assets/yuan.jpg',
        reviews: [{
          username: 'Louis',
          content: 'Genshin Impact est un jeu solide, un peu freiné par son mode gratuit. La valeur globale du jeu est élevée, le gameplay principal est top, surtout le système d\'interaction des éléments qui est super fun et très unique.'
        }],
        rating: 9.0,
        releaseDate: '2020-09-28'
      },
      {
        id: 4,
        name: 'Black Myth: Wukong',
        type: 'Action RPG',
        platform: 'PC / PS5',
        players: 'Solo',
        description: '"Black Myth: Wukong" est un jeu de rôle d\'action basé sur la mythologie chinoise. Vous incarnez un "Destiné" qui, pour découvrir la vérité derrière une légende ancienne, s\'embarque dans un périple de l\'ouest rempli de dangers et de surprises.',
        image: 'assets/wukong.jpg',
        reviews: [{username: 'Lucas', content: 'Un jalon dans l\'industrie du jeu en Chine.'}],
        rating: 9.5,
        releaseDate: '2024-08-20'
      },
      {
        id: 5,
        name: 'Assassin\'s Creed',
        type: 'Action-aventure',
        platform: 'PC / PS / Xbox',
        players: 'Solo',
        description: 'Assassin\'s Creed est un jeu d\'aventure classique sur les assassins.。',
        image: 'assets/ass.jpg',
        reviews: [{username: 'Paul', content: 'C\'est trop amusant !'}],
        rating: 9.0,
        releaseDate: '2007-11-13'
      },
      {
        id: 6,
        name: 'PUBG',
        type: 'Battle Royale',
        platform: 'PC / Xbox',
        players: '100 en ligne',
        description: '"PlayerUnknown\'s Battlegrounds" est un jeu de tir à la première personne de type "battle royale".',
        image: 'assets/pubg.jpg',
        reviews: [{username: 'Victor', content: 'Winner winner chicken dinner！'}],
        rating: 8.8,
        releaseDate: '2017-12-20'
      },
    ];

    this.gamesSubject = new BehaviorSubject<Game[]>(initialGames);
    this.games$ = this.gamesSubject.asObservable();
  }

  getGames(): Observable<Game[]> {
    return this.games$;
  }

  addGame(newGame: Game): void {
    const currentGames = this.gamesSubject.getValue();
    newGame.id = currentGames.length + 1;
    this.gamesSubject.next([...currentGames, newGame]);
  }

  getGameById(id: number): Observable<Game | undefined> {
    return this.games$.pipe(
      map(games => games.find(game => game.id === id))
    );
  }
}
