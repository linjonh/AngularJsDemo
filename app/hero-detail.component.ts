/**
 * Created by lin on 2017/1/17.
 */
import {Component, Input} from '@angular/core';
import {Hero} from './Hero';
@Component({
    selector: 'my-hero-detail',
    template: `<div *ngIf="hero">
                <h2>{{hero.name}} details!</h2>
                <div><label for="">id:</label>{{hero.id}}</div>
                <div>
                <label for="">name:</label>
                <input [(ngModel)]="hero.name" placeholder="name">
                </div>
                </div>
               `,
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}