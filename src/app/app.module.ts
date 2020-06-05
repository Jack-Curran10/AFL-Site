import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';
import { ResultsComponent } from './results/results.component';
import { MatchesComponent } from './matches/matches.component';
import { StatsComponent } from './stats/stats.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { HomeComponent } from './home/home.component';
import { MyTeamDetailsComponent } from './my-team/my-team-details/my-team-details.component';
import {DataServiceService} from './data-service.service';
import { RivalsComponent } from './rivals/rivals.component';
import { RivalDetailsComponent } from './rivals/rival-details/rival-details.component';
import { TeamDetailsComponent } from './rivals/team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLeagueTableComponent,
    ResultsComponent,
    MatchesComponent,
    StatsComponent,
    MyTeamComponent,
    HomeComponent,
    MyTeamDetailsComponent,
    RivalsComponent,
    RivalDetailsComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
