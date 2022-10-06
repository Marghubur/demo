import { animate, animation, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  data: Array<any> = [{
    header: 'Header 1',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio suscipit? Excepturi recusandae beatae maiores? Facere delectus possimus maxime eum minima deleniti omnis debitis quasi ipsam! Quibusdam qui fugiat incidunt.'
  }, {
    header: 'Header 2',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio suscipit? Excepturi recusandae beatae maiores? Facere delectus possimus maxime eum minima deleniti omnis debitis quasi ipsam! Quibusdam qui fugiat incidunt.'
  }, {
    header: 'Header 3',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio suscipit? Excepturi recusandae beatae maiores? Facere delectus possimus maxime eum minima deleniti omnis debitis quasi ipsam! Quibusdam qui fugiat incidunt.'
  }, {
    header: 'Header 4',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, distinctio suscipit? Excepturi recusandae beatae maiores? Facere delectus possimus maxime eum minima deleniti omnis debitis quasi ipsam! Quibusdam qui fugiat incidunt.'
  }];
  indexdata: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(index: number) {
    this.indexdata = index;
  }

}
