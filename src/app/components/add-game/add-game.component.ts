import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../core/services/game.service';
import { Game} from '../../core/models/game.model';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  standalone: false,
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {
  addGameForm: FormGroup;
  previewGame: Game = {
    id: 0,
    name: '',
    type: '',
    platform: '',
    players: '',
    description: '',
    image: '',
    reviews: [],
    rating: 0,
    releaseDate: ''
  };

  constructor(private fb: FormBuilder, private gameService: GameService) {
    this.addGameForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      platform: ['', Validators.required],
      players: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      releaseDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.addGameForm.valueChanges.subscribe((formData) => {
      this.previewGame = { ...this.previewGame, ...formData };
    });
  }

  onSubmit(): void {
    if (this.addGameForm.valid) {
      this.gameService.addGame(this.addGameForm.value);
      alert('Jeu ajouté avec succès！');
      this.addGameForm.reset();
    }else{
      alert('Échec de l\'ajout, veuillez remplir tous les champs.');
    }
  }
}
