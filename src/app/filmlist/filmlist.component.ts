import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-filmlist',
  standalone: true,
  imports: [HttpClientModule, RouterModule, RouterOutlet],
  providers: [StarWarsService],
  templateUrl: './filmlist.component.html',
  styleUrl: './filmlist.component.css'
})

export class FilmlistComponent {
  filmes: any[] = [];

  constructor(private srv: StarWarsService) {
    // console.log("Funcionando");
  }

  ngOnInit() {
    this.getFilmesServices();
  };

  getFilmesServices(){
    this.srv.getFilmes().subscribe((data: any) => {
      this.filmes = data.results.sort((a: any, b: any) => a.episode_id - b.episode_id);
      console.log(this.filmes)
    })
  }
};
