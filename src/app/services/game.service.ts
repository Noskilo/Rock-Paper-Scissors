import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export enum JankenType {
  ROCK,
  PAPER,
  SCISSORS,
}

export enum RoundOutcome {
  WIN,
  LOSS,
  TIE,
}

export interface Round {
  playerPick: JankenType;
  housePick: JankenType;
  outcome: RoundOutcome;
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private score = new BehaviorSubject(0);
  scoreListener = this.score.asObservable();

  private round = new Subject<Round>();
  roundListener = this.round.asObservable();

  constructor() {}

  play(playerPick: JankenType) {
    const housePick = this.randomEnum(JankenType);

    console.log(housePick);

    const result = playerPick + ':' + housePick;
    let outcome = RoundOutcome.TIE;

    switch (result) {
      case JankenType.ROCK + ':' + JankenType.PAPER:
        this.decrement();
        outcome = RoundOutcome.LOSS;
        break;
      case JankenType.PAPER + ':' + JankenType.ROCK:
        this.increment();
        outcome = RoundOutcome.WIN;
        break;
      case JankenType.SCISSORS + ':' + JankenType.PAPER:
        this.increment();
        outcome = RoundOutcome.WIN;
        break;
      case JankenType.PAPER + ':' + JankenType.SCISSORS:
        this.decrement();
        outcome = RoundOutcome.LOSS;
        break;
      case JankenType.SCISSORS + ':' + JankenType.ROCK:
        this.increment();
        outcome = RoundOutcome.WIN;
        break;
      case JankenType.ROCK + ':' + JankenType.SCISSORS:
        this.decrement();
        outcome = RoundOutcome.LOSS;
        break;
    }

    this.round.next({
      housePick,
      playerPick,
      outcome,
    });
  }

  reset() {
    this.round.next(null);
  }

  private increment() {
    this.score.next(this.score.value + 1);
  }

  private decrement() {
    this.score.next(this.score.value - 1);
  }

  private randomEnum<T>(anEnum: T): T[keyof T] {
    const enumValues = (Object.keys(anEnum)
      .map((n) => Number.parseInt(n))
      .filter((n) => !Number.isNaN(n)) as unknown) as T[keyof T][];
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    const randomEnumValue = enumValues[randomIndex];
    return randomEnumValue;
  }
}
