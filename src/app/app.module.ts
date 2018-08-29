import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent, HighlightDirective],
  bootstrap: [ProductComponent]
})

export class AppModule { }
