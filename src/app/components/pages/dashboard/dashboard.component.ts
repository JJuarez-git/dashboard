import { Component, OnInit } from '@angular/core';
import { openClose } from '../../../animations/animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [openClose]
})
export class DashboardComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpenClose() {
    this.isOpen = !this.isOpen;
  }

}
