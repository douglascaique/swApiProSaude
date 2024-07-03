import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-film-details',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HttpClientModule],
  providers: [StarWarsService],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.css'
})

export class FilmDetailsComponent {
  http: any;
  details: any = {};
  characters: any = [];
  filmId = Number(this.route.snapshot.paramMap.get('id'));
  

  constructor(public srv: StarWarsService, public route: ActivatedRoute) {
    // console.log("Funcionando Details Constructor");
  }

  // async getFilmDetailsServices(id: number) {
  //   let response = await this.srv.getFilmDetails(id).subscribe((data: any) => {
  //     this.details = data.results;
  //   })
  //   console.log(`DEBUG film.details`, response)
  // }

  ngOnInit() {
    this.srv.getFilmDetails(this.filmId).subscribe(async (response) =>{
      this.details = await response;
      this.characters = this.srv.getCharactersByList(response.characters.slice(0, 5))
      console.log('Film Details', this.details)
    }, (error) => {
      console.log('Failed to get film Details', error)
    })
    // console.log('Peguei a lista de chars', this.characters)
    // console.log('verificando chars no componente', this.characters)
  }

    // filmId = Number(this.route.snapshot.paramMap.get('id'));
  //   await this.route.params.subscribe((params) => {
  //     this.filmId = params['id'];
  //     this.getFilmDetailsServices(this.filmId);
  //   })
  //   console.log('Cheguei aqui')
  // ngAfterContentInit() {

  // }
};