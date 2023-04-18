import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    
    // searchText = searchText.toLowerCase();
    console.log(value.length)
    console.log(searchTerm)
    if(searchTerm.length ===0){
      return value;
    }

    return value.filter(function (search: { firstName: string; })  {
      console.log(search.firstName)
      return search.firstName?.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}