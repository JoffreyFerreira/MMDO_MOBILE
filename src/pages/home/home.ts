import { Component } from '@angular/core';
import {DetailsPage} from '../details/details';
interface item {
  title: string;
  author: string;
  date: string;
  image: string;
}

const i: item = { title: 'Lorem Ipsum', author: 'moi lol', date: '01/01/1990', image: "https://placeimg.com/50/50/any" };

const items: item[] = [];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results: item[] = items;
  query : string = "";
  noResults : boolean = true;
  AboutDetails = DetailsPage;
  onInput(){
    if(this.query === ""){
      this.results = [];
      this.noResults = true;
    }
    else{
      this.results = [i, i, i, i, i, i, i, i, i, i, i, i];
      this.noResults = false;
    }
  }
}
