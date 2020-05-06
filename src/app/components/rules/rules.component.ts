import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { RulesOverlayRef } from './rules-overlay-ref';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent implements OnInit {
  faTimes = faTimes;

  constructor(private dialogRef: RulesOverlayRef) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
