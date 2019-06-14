import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { MathmdComponent } from './mathmd/mathmd.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    AppComponent,
    MathmdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    MarkdownModule.forRoot(),
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
