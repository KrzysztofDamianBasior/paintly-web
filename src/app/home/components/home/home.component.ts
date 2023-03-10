import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  flowers1: string = 'assets/flowers1.jpg';
  flowers2: string = 'assets/flowers2.jpg';
  leaves1: string = 'assets/leaves1.png';
  leaves2: string = 'assets/leaves2.png';

  apiURL = environment.apiURL;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  changeRoute(): void {
    console.log('test');
  }
}
