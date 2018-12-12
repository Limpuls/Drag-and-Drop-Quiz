import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  usersandscore:Observable<any[]>;
  incremental:number = 1
  constructor(private _auth: AuthService) {
        this.usersandscore = this._auth.retrieveUsersAndScore();

  }

  ngOnInit() {
  console.log(this.usersandscore);
  }

}
