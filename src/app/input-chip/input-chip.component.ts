import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-chip',
  templateUrl: './input-chip.component.html',
  styleUrls: ['./input-chip.component.scss']
})
export class InputChipComponent implements OnInit {

  constructor() { }

  @Input() items: Array<any> = [];
  @Input() placeholder: string = "Type...";
  @Input() removable: boolean = true;

  //Use this chip input box like this.
  // <app-input-chip [items]="items" [removable]="true"></app-input-chip>
  // pass the list in item and if you want to remove that chip then pass removable as true;


  ngOnInit(): void {
  }

  addChip(e: any) {
    let value = e.target.value;
    if (value && value != '') {
      this.items.push(value);
    }
    e.target.value = '';
  }

  removeChip(i: number) {
    if (this.items.length > 0)
      this.items.splice(i, 1);
  }

}
