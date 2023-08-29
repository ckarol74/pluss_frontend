import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}
  onLogin() {
    this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }
}
