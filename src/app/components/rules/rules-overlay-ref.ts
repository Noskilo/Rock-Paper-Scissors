import { OverlayRef } from '@angular/cdk/overlay';

export class RulesOverlayRef {
  constructor(private overlay: OverlayRef) {}

  close(): void {
    this.overlay.dispose();
  }
}
