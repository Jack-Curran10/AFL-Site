import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataServiceService} from '../data-service.service';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';
import { Standings } from '../standings';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  teams:Team[];
  games:Game[];
  tips:Tip[];
  standings:Standings[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
    this.getStandings();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp;});
  }
  getTips(): void {
    this.dataService.getTips().subscribe(temp => { this.tips = temp;});
  }
  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => { this.standings = temp;});
  }

}