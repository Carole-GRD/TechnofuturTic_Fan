import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/types/Fan';

@Component({
  selector: 'app-fan-create',
  templateUrl: './fan-create.component.html',
  styleUrls: ['./fan-create.component.scss']
})
export class FanCreateComponent implements OnInit {
  fan?: Fan


  constructor() {}

  ngOnInit() {
   
  }
}
