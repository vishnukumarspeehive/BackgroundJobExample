import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabstrip',
  templateUrl: './tabstrip.component.html',
  styleUrls: ['./tabstrip.component.scss'],
  })
export class TabstripComponent implements OnInit {

  constructor() { }
tabIndex
 
  onTabClick(index){
    this.tabIndex = index;
}
ngOnInit(): void {
}
}
