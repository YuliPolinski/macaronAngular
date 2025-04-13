import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: string, limit: number = 95): string {
    if (!value) return '';
    return value.length > limit ? value.slice(0, limit).trim() + '...' : value;
  }

}
