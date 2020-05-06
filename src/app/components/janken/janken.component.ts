import { Component, OnInit, Input } from '@angular/core';
import { JankenType } from 'src/app/services/game.service';

@Component({
  selector: 'app-janken',
  templateUrl: './janken.component.html',
  styleUrls: ['./janken.component.scss'],
})
export class JankenComponent implements OnInit {
  @Input('type') type = JankenType.ROCK;
  @Input('size') size = 6;

  jankenType = JankenType;

  constructor() {}

  ngOnInit(): void {}
}
