import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../../pages/customers/customers.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  opened: boolean = false;
  @Input() modalTitle: string;

  @Output() 
  submitCustomer = new EventEmitter<Customer>();

  customerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor() { }
  
  toggleModal() {
    (this.opened) ? this.opened = false : this.opened = true;
    this.customerForm.reset();
  }

  onSubmit() {
    this.customerForm.value.status = false;
    this.submitCustomer.emit(this.customerForm.value);
    this.toggleModal();
  }

}
