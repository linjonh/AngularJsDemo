/**
 * Created by jaysen.lin@foxmail.com on 2017/1/18.
 */

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {Routes, RouterModule} from '@angular/router';
import {HeroDetailComponent} from './hero-detail.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'heroes', component: HeroesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}