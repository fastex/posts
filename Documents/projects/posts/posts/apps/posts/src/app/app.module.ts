import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { UiModule } from '@posts/ui';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { filterReducer, postsReducer } from '@posts/data';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: postsReducer, filter: filterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
