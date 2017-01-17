/**
 * Created by lin on 2017/1/17.
 */
import {Injectable} from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heros';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }; // stub
}