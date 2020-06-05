import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import {DataServiceService} from '../data-service.service';
import { Team } from '../team';
import { Game } from '../game';
import { Tip } from '../tip';
import { SeasonGame } from '../season-game';
import { Teamchoice } from '../teamchoice';

@Component({
  selector: 'app-rivals',
  templateUrl: './rivals.component.html',
  styleUrls: ['./rivals.component.css']
})
export class RivalsComponent implements OnInit {

  selectedTeam:Team;
  teams:Team[];
  teamChoices:Teamchoice[];
  chosenTeam:Team;


  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
  this.getAFLTeams();
  this.getTeamChoices();

  }
  onSelect (team:Team): void {
    this.selectedTeam = team;
  }
  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp;});
  }

  getTeamChoices(): void{

    this.dataService.getTeamChoice().subscribe(temp => {this.teamChoices = temp;});
  }
}


