import {Component} from '@angular/core';
import {Environment} from '../environment/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public environment: Environment) {
  }
}
