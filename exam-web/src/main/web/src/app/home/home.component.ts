import { Component, OnInit } from '@angular/core';
import { MatIconRegistry, MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.matIconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'angular',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/angular_solidBlack.svg')
    )

    this.matIconRegistry.registerFontClassAlias('fontawesome','fab');
  }
  
  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
      console.log(`选单状态：${result}`);
    });
  }

  opened() {
    console.log("click open");
  }

  closed() {
    console.log("click closed");
  }

}
