import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  date: Date = null;
  day: number = 0;
  constructor() { }

  ngOnInit(): void {
    let date = new Date();
    setInterval(() => {
      this.date = date;
    }, 100);

  }

}
