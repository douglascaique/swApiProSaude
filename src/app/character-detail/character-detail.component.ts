import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HttpClientModule],
  providers: [StarWarsService],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.css'
})

export class CharacterDetailComponent {
  http: any;
  char: any = {};
  films: any = [];
  charId = Number(this.route.snapshot.paramMap.get('id'));
  

  constructor(public srv: StarWarsService, public route: ActivatedRoute) {
  }



  ngOnInit() {
    this.srv.getCharDetails(this.charId).subscribe(async (response) =>{
      this.char = await response;
      this.films = this.srv.getFilmByList(response.films)
    }, (error) => {
      console.log('Failed to get film Details instala o zrok na sua maquina calma', error)
    })

  }


}