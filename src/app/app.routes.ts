import { Routes, RouterModule, RouterOutlet, provideRouter, withDebugTracing } from '@angular/router';
import { ApplicationConfig, NgModule } from '@angular/core';
import { FilmlistComponent } from './filmlist/filmlist.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

export const routes: Routes = [
    { path: 'filmlist', component: FilmlistComponent },
    { path: 'film-details/:id', component: FilmDetailsComponent },
    { path: 'character-detail/:id', component: CharacterDetailComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes), RouterOutlet],
    exports: [RouterModule]
})

export class AppRoutingModule { }

// export const appConfig: ApplicationConfig = {
//     providers: [provideRouter(routes, withDebugTracing())]
// }
