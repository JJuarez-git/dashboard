import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { openClose } from 'src/app/animations/animation';

export interface Customer {
  name: string,
  email?: string,
  phone?: string,
  status?: boolean
}

const CUSTOMER_DATA: Customer[] = [
  {name: 'Jose', email: 'jose@gmail.com', phone: '666 333 444', status: true},
  {name: 'Pedro', email: 'pedro@gmail.com', phone: '666 333 444', status: false},
  {name: 'Miguel', email: 'miguel@gmail.com', phone: '666 333 444', status: true},
  {name: 'Maria', email: 'maria@gmail.com', phone: '666 333 444', status: true},
  {name: 'Carlota', email: 'carlota@gmail.com', phone: '666 333 444', status: false},
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  animations: [openClose]
})
export class CustomersComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'status', 'actions'];
  dataSource = new MatTableDataSource<Customer>(CUSTOMER_DATA);
  dataLength = CUSTOMER_DATA.length;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clickedRows = new Array<Customer>();

  isOpen = false;
  
  toggleOpenClose() {
    this.isOpen = !this.isOpen;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() { }

  selectRow(row:Customer) {
    if(this.clickedRows.includes(row)){
      /* this.clickedRows.pop();
      return; */
    }
    this.clickedRows.pop();
    this.clickedRows.push(row);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addCustomer(customer: Customer) {
    CUSTOMER_DATA.push(customer);
    this.dataSource.data = CUSTOMER_DATA;
    this.dataLength = CUSTOMER_DATA.length;
    this.toggleOpenClose();
    setTimeout(() => this.toggleOpenClose(), 3000);
  }

  deleteCustomer(index: number) {
    //CUSTOMER_DATA.splice(index, 1);
    //this.dataSource.data = CUSTOMER_DATA;
    console.log(this.dataSource.data);
    console.log(CUSTOMER_DATA);
  }

  dataLoaded(): boolean {
    return (CUSTOMER_DATA.length > 0) ? true : false;
  }
}
