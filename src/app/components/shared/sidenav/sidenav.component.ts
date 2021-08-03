import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  @Output()
  clickedLink = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickLink() { 
    this.clickedLink.emit();
  }

}
