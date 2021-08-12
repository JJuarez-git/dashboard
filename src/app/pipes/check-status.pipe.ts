import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkStatus'
})
export class CheckStatusPipe implements PipeTransform {

  transform(value: boolean): string {

    let status: string;

    return (value) ? status = 'Online' : status = 'Disconnected';
  }

}
