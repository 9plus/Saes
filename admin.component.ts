import { Component, OnInit } from '@angular/core';
import { MatSidenav, MatDrawerToggleResult} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css','../common/admin-common.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggle(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
      console.log(`选单状态：${result}`);
    });
  }

  opened() {
    console.log('click open');
  }

  closed() {
    console.log('click closed');
  }
}
