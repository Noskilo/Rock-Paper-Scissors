import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Round, RoundOutcome, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input('round') round: Round;

  roundOutcome = RoundOutcome;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    console.log(this.round);
  }

  playAgain() {
    this.gameService.reset();
  }
}
