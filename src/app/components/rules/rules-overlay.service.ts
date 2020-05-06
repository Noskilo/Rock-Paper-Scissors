import { Injectable, Injector, ComponentRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { RulesComponent } from './rules.component';
import { RulesOverlayRef } from './rules-overlay-ref';

interface RulesOverlayConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: RulesOverlayConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
};

@Injectable({
  providedIn: 'root',
})
export class RulesOverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(config: RulesOverlayConfig = {}): OverlayRef {
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);
    const dialogRef = new RulesOverlayRef(overlayRef);

    this.attachDialogContainer(overlayRef, dialogRef);

    overlayRef.backdropClick().subscribe((_) => overlayRef.dispose());

    return overlayRef;
  }

  private createOverlay(config: RulesOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private attachDialogContainer(
    overlayRef: OverlayRef,
    dialogRef: RulesOverlayRef
  ) {
    const injector = this.createInjector(dialogRef);

    const containerPortal = new ComponentPortal(RulesComponent, null, injector);
    const containerRef: ComponentRef<RulesComponent> = overlayRef.attach(
      containerPortal
    );

    return containerRef.instance;
  }

  private createInjector(dialogRef: RulesOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(RulesOverlayRef, dialogRef);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: RulesOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });

    return overlayConfig;
  }
}
