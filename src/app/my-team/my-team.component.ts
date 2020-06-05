import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataServiceService} from '../data-service.service';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';
import { SeasonGame } from '../season-game';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  selectedTeam:Team;
  teams:Team[];
  games:Game[];
  tips:Tip[];
  teamSelection: string = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
    this.getTips();
  }

  onSelect (team:Team): void {
    this.selectedTeam = team;
  }
  selectChangeHandler (event: any) {
    this.teamSelection = event.target.value;
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

}