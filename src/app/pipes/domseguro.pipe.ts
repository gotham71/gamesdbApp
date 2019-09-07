import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform(value: string, url: string, size: string = '1080p'): any {

    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + size + '/' + value + '.jpg' );
  }

}
