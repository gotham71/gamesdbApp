import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { PlatformComponent } from './components/platform/platform.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { PlatformListComponent } from './components/platform-list/platform-list.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'games', component: GameListComponent },
    { path: 'game/:id', component: GameComponent },
    { path: 'platforms', component: PlatformListComponent },
    { path: 'platform/:id', component: PlatformComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);