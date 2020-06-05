import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  games:Game[];

  constructor(private dataService: DataServiceService) { }



  ngOnInit() {

    this.getGames();
    
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => {
  
      var tempArr = []; 
  
      temp.forEach(element => {
        if(element.round == 20) tempArr.push(element);
  
      });
      this.games = tempArr;
      this.games.sort(this.compareFuncLow);
      });
  }
  compareFuncLow(a, b) {
    const gameAScore = a.date
    const gameBScore = b.date

    let compare = 0;

    if(gameAScore < gameBScore) {
      compare = - 1;
    } else if (gameAScore > gameBScore) {
    compare = 1;
    }
    return compare;
    } 
}
