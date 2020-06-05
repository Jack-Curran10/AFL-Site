import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import {DataServiceService} from '../../data-service.service';
import { Team } from '../../team';
import { Game } from '../../game';
import { Tip } from '../../tip';
import { SeasonGame } from '../../season-game';
import { NextGame } from '../../next-game';
import { VenueWin } from '../../venue-wins';
import { Teamchoice } from '../../teamchoice';
import { TmplAstBoundAttribute, TemplateParseError, CompileMetadataResolver } from '@angular/compiler';
import { Lowscoregames } from '../../lowscoregames';

@Component({
  selector: 'app-my-team-details',
  templateUrl: './my-team-details.component.html',
  styleUrls: ['./my-team-details.component.css']
})
export class MyTeamDetailsComponent implements OnInit {
  selectedTeam:Team;
  teams:Team[];
  games:Game[];
  tips:Tip[];
  seasonGames:SeasonGame[];
  nextGames:NextGame[];
  venueWins:VenueWin[];
  teamChoices:Teamchoice[];
  choiceTeam:Team;
  lowScoreGames:Lowscoregames[];

  @Input() team: Team;


  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['team']) {
      this.getSeasonGames();
    }
    if (changes['team']){
      this.getTips();
    }
    if (changes['team']){
      this.getNextGames();
    }
    if (changes['team']){
      this.getVenueWins();
    }
    if (changes ['team']){
      this.getGames();
    }

    
  }

  ngOnInit() {
 
    this.getSeasonGames();
    this.getTips();
    this.getNextGames();
    this.getVenueWins();
    this.getTeamChoices();
    this.getGames()
    this.getLowScoreGames()
  }


  getTeamChoices(): void{

    this.dataService.getTeamChoice().subscribe(temp => {this.teamChoices = temp;});


  }
  getSeasonGames(): void {

    //this.dataService.getSeasonGames().subscribe(temp => { this.games = temp;});
    this.dataService.getSeasonGames().subscribe(temp => {
  
    var tempArr = []; 

    temp.forEach(element => {
      if(element.hteamid == this.team.id || element.ateamid == this.team.id && element.round<19) tempArr.push(element);

    });
    this.seasonGames = tempArr;
    });
  }
  getTips(): void {
    this.dataService.getTips().subscribe(temp => { 

    var tempArr = []; 
    
    temp.forEach(element => {
      if(element.hteamid == this.team.id || element.ateamid == this.team.id) tempArr.push(element);
    });
    this.tips = tempArr;

    this.lengthFuncOne(this.tips);
    });
  }
  lengthFuncOne(a) {
    if (a.length > 1) {
      a.length = 1;
    }
  }

  getNextGames(): void{ 
    this.dataService.getNextGames().subscribe(temp => {

      var tempArr = [];

      temp.forEach(element => {
        if(element.round>19 && element.hteamid == this.team.id) tempArr.push(element);
        else if(element.round>19 && element.ateamid == this.team.id) tempArr.push(element);
      });
      this.nextGames = tempArr;

      this.lengthFuncFour(this.nextGames);
    });
  }
  lengthFuncFour(a) {
    if (a.length > 4) {
      a.length = 4;
    }

  }

  getVenueWins(): void {
    this.dataService.getVenueWins().subscribe(temp => {

      var tempArr = []; 

      temp.forEach(element => {
        if (element.winnerteamid == this.team.id && element.round<19) tempArr.push(element);
      });
      this.venueWins = tempArr;
    });  

  }
  getGames(): void {
    this.dataService.getGames().subscribe(temp => {

      var tempArr = []; 

      temp.forEach(element => {
        if(element.hteamid == this.team.id && element.round<19 && element.winnerteamid != this.team.id) tempArr.push(element);
        else if (element.ateamid == this.team.id && element.round<19 && element.winnerteamid != this.team.id) tempArr.push(element);
      });
      this.games = tempArr;
      });
  }
  getLowScoreGames(): void {
    this.dataService.getLowScoreGames().subscribe(temp => {

      var tempArr = [];

      temp.forEach(element => {
        if (element.hteam == element.winner) tempArr.push(element);
        else if (element.round<19) tempArr.push(element);

      });
      this.lowScoreGames = tempArr;
      this.lowScoreGames.sort(this.compareFuncLow);
      });

  }
  compareFuncLow(a, b) {
    const gameAScore = a.hscore
    const gameBScore = b.hscore

    let compare = 0;

    if(gameAScore < gameBScore) {
      compare = - 1;
    } else if (gameAScore > gameBScore) {
    compare = 1;
    }
    return compare;
  }

}
