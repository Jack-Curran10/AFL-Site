import { Component, OnInit, Input } from '@angular/core';
import {DataServiceService} from '../../data-service.service';
import { Team } from '../../team';
import { Teamchoice } from '../../teamchoice';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teamChoices:Teamchoice[];
  chosenTeam:Team;

  constructor(private dataService: DataServiceService) { }

  @Input() team: Team;
  @Input() rival: Team;

  ngOnInit() {

    this.getTeamChoices();
  }

  getTeamChoices(): void{

    this.dataService.getTeamChoice().subscribe(temp => {this.teamChoices = temp;});
  }

  onChoice (rival:Team): void {
    this.chosenTeam = rival;
  }






}
