import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Services
import { GamesdbService } from './services/gamesdb.service';

//Pipes
import { NoPicPipe } from './pipes/nopic.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


//Routes
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { PlatformListComponent } from './components/platform-list/platform-list.component';
import { GameComponent } from './components/game/game.component';
import { PlatformComponent } from './components/platform/platform.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GameListComponent,
    PlatformListComponent,
    GameComponent,
    PlatformComponent,
    NoPicPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    GamesdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
