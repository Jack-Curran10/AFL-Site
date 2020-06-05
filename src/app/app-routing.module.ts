import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ResultsComponent} from './results/results.component';
import {MatchesComponent} from './matches/matches.component';
import {StatsComponent} from './stats/stats.component';
import {MyTeamComponent} from './my-team/my-team.component';
import {HomeComponent} from './home/home.component';
import {RivalsComponent} from './rivals/rivals.component';


const routes: Routes = [
  {path: 'Results', component: ResultsComponent},
  {path: 'Matches', component: MatchesComponent},
  {path: 'Stats', component: StatsComponent},
  {path: 'MyTeam', component: MyTeamComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Rivals', component: RivalsComponent},
  {path: '**', redirectTo: 'Results', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
