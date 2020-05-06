import { Component, OnInit } from '@angular/core';
import { JankenType, GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-action-triangle',
  templateUrl: './action-triangle.component.html',
  styleUrls: ['./action-triangle.component.scss'],
})
export class ActionTriangleComponent implements OnInit {
  jankenType = JankenType;

  constructor(private gameService: GameService) {}

  play(playerPick: JankenType) {
    console.log(playerPick);
    this.gameService.play(playerPick);
  }

  ngOnInit(): void {}
}
