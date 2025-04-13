import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone || phone.length !== 12 || !/^\d+$/.test(phone)) return phone;

    const country = phone.slice(0, 3);
    const code = phone.slice(3, 5);
    const part1 = phone.slice(5, 8);
    const part2 = phone.slice(8, 10);
    const part3 = phone.slice(10, 12);

    return `+${country} (${code}) ${part1}-${part2}-${part3}`;
  }

}
