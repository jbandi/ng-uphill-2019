import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'camelCase' })
export class CamelCasePipe implements PipeTransform {

    transform(value: string, drinking: boolean = false): string {
        const parts = value.split(' ');

        const camelParts = parts.map(p => p.substr(0, 1).toUpperCase() + p.substr(1));

        if (drinking === true) {
          camelParts[0] = camelParts[0].substr(0, 1).toLocaleLowerCase() + camelParts[0].substr(1);
        }

        return camelParts.join(' ');
    }

}
