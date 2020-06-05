import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { map } from 'rxjs/operators';
import { Team } from './team';
import { Game } from './game';
import { Tip } from './tip';
import { SeasonGame } from './season-game';
import { NextGame } from './next-game';
import { VenueWin } from './venue-wins';
import { Teamchoice } from './teamchoice';
import { Rivalgame } from './rivalgame';
import { Lowscoregames } from './lowscoregames';
import { Standings } from './standings';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getTeamChoice(): Observable<Teamchoice[]> {

    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe( 
      map((data: any) => data.teams.map((item: any) => new Team( 
        item.logo, 
        item.id, 
        item.name, 
        item.abbrev 
      ))) 
  );
      }

  getTeams(): Observable<Team[]> {

    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe( 
      map((data: any) => data.teams.map((item: any) => new Team( 
        item.logo, 
        item.id, 
        item.name, 
        item.abbrev 
      ))) 
  );
      }

  getTips() : Observable<Tip[]> { 

        return this.http.get('https://api.squiggle.com.au/?q=tips;year=2019;round=20').pipe( 
          map((data: any) => data.tips.map((item: any) => new Tip( 
            item.confidence, 
            item.bits, 
            item.gameid, 
            item.ateamid, 
            item.venue, 
            item.year, 
            item.correct, 
            item.date, 
            item.updated, 
            item.hteam, 
            item.tipteamid, 
            item.margin, 
            item.err, 
            item.tip, 
            item.ateam,       
            item.source,        
            item.sourceid,         
            item.hconfidence,      
            item.hteamid, 
            item.round 
          )))  
  );       
          }   
      getGames() : Observable<Game[]> { 

        return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe( 

          map((data: any) => data.games.map((item: any) => new Game(            
            item.complete, 
            item.is_grand_final, 
            item.tz, 
            item.hbehinds, 
            item.ateam, 
            item.winnerteamid, 
            item.hgoals, 
            item.updated, 
            item.round, 
            item.is_final, 
            item.hscore, 
            item.abehinds, 
            item.winner, 
            item.ascore, 
            item.hteam, 
            item.ateamid, 
            item.venue, 
            item.hteamid, 
            item.agoals, 
            item.year, 
            item.date, 
            item.id 
          ))) 
        );  

           }         

      getSeasonGames() : Observable<SeasonGame[]> { 

          return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe( 
  
            map((data: any) => data.games.map((item: any) => new Game(            
              item.complete, 
              item.is_grand_final, 
              item.tz, 
              item.hbehinds, 
              item.ateam, 
              item.winnerteamid, 
              item.hgoals, 
              item.updated, 
              item.round, 
              item.is_final, 
              item.hscore, 
              item.abehinds, 
              item.winner, 
              item.ascore, 
              item.hteam, 
              item.ateamid, 
              item.venue, 
              item.hteamid, 
              item.agoals, 
              item.year, 
              item.date, 
              item.id 
            ))) 
          );  
  
             }   

        getNextGames() : Observable<NextGame[]> { 

            return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe( 
    
              map((data: any) => data.games.map((item: any) => new Game(            
                item.complete, 
                item.is_grand_final, 
                item.tz, 
                item.hbehinds, 
                item.ateam, 
                item.winnerteamid, 
                item.hgoals, 
                item.updated, 
                item.round, 
                item.is_final, 
                item.hscore, 
                item.abehinds, 
                item.winner, 
                item.ascore, 
                item.hteam, 
                item.ateamid, 
                item.venue, 
                item.hteamid, 
                item.agoals, 
                item.year, 
                item.date, 
                item.id 
              ))) 
            );  
    
               } 
          getVenueWins() : Observable<VenueWin[]> { 

              return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;complete=100').pipe( 
      
                map((data: any) => data.games.map((item: any) => new Game(            
                  item.complete, 
                  item.is_grand_final, 
                  item.tz, 
                  item.hbehinds, 
                  item.ateam, 
                  item.winnerteamid, 
                  item.hgoals, 
                  item.updated, 
                  item.round, 
                  item.is_final, 
                  item.hscore, 
                  item.abehinds, 
                  item.winner, 
                  item.ascore, 
                  item.hteam, 
                  item.ateamid, 
                  item.venue, 
                  item.hteamid, 
                  item.agoals, 
                  item.year, 
                  item.date, 
                  item.id 
                ))) 
              );  
      
                 }  

            getRivalGames() : Observable<Rivalgame[]> { 

                return this.http.get('https://api.squiggle.com.au/?q=games;round=20;year=2019').pipe( 
        
                  map((data: any) => data.games.map((item: any) => new Game(            
                    item.complete, 
                    item.is_grand_final, 
                    item.tz, 
                    item.hbehinds, 
                    item.ateam, 
                    item.winnerteamid, 
                    item.hgoals, 
                    item.updated, 
                    item.round, 
                    item.is_final, 
                    item.hscore, 
                    item.abehinds, 
                    item.winner, 
                    item.ascore, 
                    item.hteam, 
                    item.ateamid, 
                    item.venue, 
                    item.hteamid, 
                    item.agoals, 
                    item.year, 
                    item.date, 
                    item.id 
                  ))) 
                );  
        
                   } 

              getLowScoreGames() : Observable<Lowscoregames[]> { 

                  return this.http.get('https://api.squiggle.com.au/?q=games;round=20;year=2019').pipe( 
          
                    map((data: any) => data.games.map((item: any) => new Game(            
                      item.complete, 
                      item.is_grand_final, 
                      item.tz, 
                      item.hbehinds, 
                      item.ateam, 
                      item.winnerteamid, 
                      item.hgoals, 
                      item.updated, 
                      item.round, 
                      item.is_final, 
                      item.hscore, 
                      item.abehinds, 
                      item.winner, 
                      item.ascore, 
                      item.hteam, 
                      item.ateamid, 
                      item.venue, 
                      item.hteamid, 
                      item.agoals, 
                      item.year, 
                      item.date, 
                      item.id 
                    ))) 
                  );  
          
                     } 
                getStandings() : Observable<Standings[]> { 

                    return this.http.get('https://api.squiggle.com.au/?q=standings;year=2019;round=20').pipe( 
            
                      map((data: any) => data.standings.map((item: any) => new Standings(            
                        item.id,
                        item.goals_against,
                        item.goals_for,
                        item.played,
                        item.behinds_against,
                        item.against,
                        item.name, 
                        item.percentage,
                        item.rank,
                        item.wins, 
                        item.draws,
                        item.losses,
                        item.pts                   
                      ))) 
                    );  
            
                       } 



}
