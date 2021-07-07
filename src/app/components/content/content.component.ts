import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'My Workplace';
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggleModal() {
    (this.opened) ? this.opened = false : this.opened = true;
  }

}
