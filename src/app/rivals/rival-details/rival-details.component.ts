import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import { Team } from '../../team';
import { SeasonGame } from '../../season-game';
import { Rivalgame } from '../../rivalgame'



@Component({
  selector: 'app-rival-details',
  templateUrl: './rival-details.component.html',
  styleUrls: ['./rival-details.component.css']
})
export class RivalDetailsComponent implements OnInit {
  seasonGames:SeasonGame[];
  rivalGames:Rivalgame[];

  constructor(private dataService: DataServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rival']) {
      this.getRivalGames();
    }
    if(changes['team']) {
      this.getRivalGames();
    }
  }

  @Input() rival: Team;
  @Input() team: Team;

  ngOnInit() {
    this.getSeasonGames();
    this.getRivalGames();

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

getRivalGames() {

  this.dataService.getRivalGames().subscribe(temp => {

    var tempArr = [];

    temp.forEach(element => {

      //if (element.hteamid == this.team.id || element.ateamid == this.team.id && element.round<19) tempArr.push(element);
      if (element.hteamid == this.rival.id || element.ateamid == this.rival.id && element.round<19) tempArr.push(element);
    });
    this.rivalGames = tempArr;
    });

  } 
}
