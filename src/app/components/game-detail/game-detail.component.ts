import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../core/services/game.service';
import { Game } from '../../core/models/game.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  standalone: false,
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game!: Game | undefined;
  showForm: boolean = false;
  reviewForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private fb: FormBuilder
  ) {
    this.reviewForm = this.fb.group({
      username: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const gameId = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGameById(gameId).subscribe(game => this.game = game);
  }

  goBack(): void {
    this.router.navigate(['/games']);
  }

  toggleReviewForm(): void {
    this.showForm = !this.showForm;
  }

  submitReview(): void {
    if (this.reviewForm.valid && this.game) {
      const newReview = this.reviewForm.value;
      this.game.reviews.push(newReview);
      this.showForm = false;
      this.reviewForm.reset();
    }
  }
}
