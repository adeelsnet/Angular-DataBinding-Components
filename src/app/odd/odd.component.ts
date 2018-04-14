import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddNumber: number;
  @Input() oddSerial: number;
  sNo: number = 0;


  constructor() { }

  ngOnInit() {
    this.sNo = this.oddSerial;
  }

}
