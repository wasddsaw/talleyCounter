import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter:number;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad');

    // set counter to zero
    this.counter = 0;

  }

  add(){
    console.log('add');

    this.counter = this.counter + 1;
  }

  minus(){
    console.log('minus');
    this.counter = this.counter - 1;
    if(this.counter < 0) {
      this.counter = 0;
    }
  }

  reset(){
    this.counter = 0;
  }

}
