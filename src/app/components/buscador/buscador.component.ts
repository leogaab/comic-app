import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  personaje: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( params => {
      this.personaje = params.personaje;
      this.heroes = this.heroesService.buscarHeroes(this.personaje);
      console.log(this.heroes);
    });
  }

}
