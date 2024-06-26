import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FilmlistComponent } from './filmlist/filmlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FilmDetailsComponent } from './film-details/film-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FilmlistComponent, FilmDetailsComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'swApiProSaude';
}
