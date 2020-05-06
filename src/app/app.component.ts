import { Component, OnInit, OnDestroy } from '@angular/core';
import { RulesOverlayService } from './components/rules/rules-overlay.service';
import { GameService, Round } from './services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  roundSubscription: Subscription;
  scoreSubscription: Subscription;

  round: Round;
  score = 0;

  constructor(
    private rulesOverlay: RulesOverlayService,
    private gameService: GameService
  ) {}

  ngOnInit(): void {
    this.scoreSubscription = this.gameService.scoreListener.subscribe(
      (score) => (this.score = score)
    );

    this.roundSubscription = this.gameService.roundListener.subscribe(
      (round) => {
        this.round = round;
      }
    );
  }

  open() {
    this.rulesOverlay.open({
      hasBackdrop: true,
      backdropClass: 'backdrop',
    });
  }

  ngOnDestroy(): void {
    this.scoreSubscription.unsubscribe();
    this.roundSubscription.unsubscribe();
  }
}
