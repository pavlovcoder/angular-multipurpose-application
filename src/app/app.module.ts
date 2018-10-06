import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './component';
import { HighlightDirective } from './highlight.directive';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { OpenCloseAnimationComponent } from './open-close-animation/open-close-animation.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    ProductComponent,
    HighlightDirective,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    OpenCloseAnimationComponent,
    HttpClientComponent
  ],
  bootstrap: [ProductComponent]
})

export class AppModule { }
