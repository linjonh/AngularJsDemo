import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html',
    providers: [],
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];


    constructor(private heroService: HeroService,
    private router: Router) {

    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }

}

