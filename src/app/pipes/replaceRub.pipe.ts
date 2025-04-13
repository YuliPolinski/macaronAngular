import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceRub'
})
export class ReplaceRubPipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) return '';
    return value.replace('₽', '').trim() + ' руб.';
  }
}
