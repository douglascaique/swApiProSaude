import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StarWarsService {
  public apiUrl = 'https://swapi.dev/api/';

  public filmDetails = Array<{
    title: string,
    episode_id: number,
    release_date: string,
    director: string,
    producer: string,
    characters: Array<string>
  }>;

  public filmeType = Array<{
    title: string,
    episode_id: number,
    release_date: string
  }>;

  public chars = <any>[];
  public films = <any>[];

  // private filmes: Filme;

  constructor(private http: HttpClient) { }

  getFilmes() {
    return this.http.get(`${this.apiUrl}/films`)
  }

  getFilmDetails(filmId: number): Observable<any> {
    // this.apiUrl = `https://swapi.dev/api/films/${filmId}`;
    return this.http.get<any>(`${this.apiUrl}/films/${filmId}`);
  }

  getFilmWithCharacters(filmId: number): Observable<any> {
    return this.getFilmDetails(filmId);
  }


  getCharactersByList(charUrl: Array<any>): Observable<any> {
    charUrl.forEach(element => {
      this.http.get(element).subscribe((response) => {
        this.chars.push(response)
        console.log('test response', response)
      }, (error) => {
        console.log('Failed to get characters', error)
      })

    });
    console.log('Este chars', this.chars)
    return this.chars // => [{}, {}]
  }
  
  getCharDetails(charId: Number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/people/${charId}`)
  }

  getFilmByList(filmUrls: Array<any>): Observable<any> {
    filmUrls.forEach(element => {
      this.http.get(element).subscribe((response) => {
        this.films.push(response)
        console.log('test response', response)
      }, (error) => {
        console.log('Failed to get characters', error)
      })
    });
    console.log('Este chars', this.chars)
    return this.films // => [{}, {}]
  }

  // getCharacters(charUrl: Array<any>): Observable<any> {
  //   let charactersObjects: Observable<any>[] = []
  //   console.log(charUrl)
  //   charUrl.forEach(element => {
  //     console.log('Get elements', element)
  //     const characterObservable = this.http.get<any>(element);
  //     characterObservable.subscribe((response) => {
  //       charactersObjects.push(response)

  //       console.log('test response', response)
  //     }, (error) => {
  //       console.log('Failed to get characters', error)
  //     })
  //     charactersObjects.push(characterObservable);

  //   });
  //   console.log('Chars Object', charactersObjects)

  //   // return this.http.get<any>(charUrl[1])
  //   return charactersObjects;
  // }

  // getCharactersById(){
  //   [].forEach(element => {

  //   });
  //   return this.http.get('https://swapi.dev/api/people')
  // }
}
