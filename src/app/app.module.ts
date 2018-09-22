import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './component';
import { HighlightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { OpenCloseAnimationComponent } from './open-close-animation/open-close-animation.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
  declarations: [ProductComponent, HighlightDirective, ExponentialStrengthPipe, FlyingHeroesPipe, OpenCloseAnimationComponent],
  bootstrap: [ProductComponent]
})

export class AppModule { }
