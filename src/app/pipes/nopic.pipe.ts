import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NoPicPipe'
})
export class NoPicPipe implements PipeTransform {

  transform(images: any): any {
    let noimage = 'assets/imgs/noimage.png';

    if (images.logo == undefined) {
      return noimage;
    }

    return (images.logo.url.length > 0) ? images.logo.url : noimage;
  }

}
