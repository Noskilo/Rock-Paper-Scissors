import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RulesComponent } from './components/rules/rules.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JankenComponent } from './components/janken/janken.component';
import { ActionTriangleComponent } from './components/action-triangle/action-triangle.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [AppComponent, RulesComponent, JankenComponent, ActionTriangleComponent, ResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
