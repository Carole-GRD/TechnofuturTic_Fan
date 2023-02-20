import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FanService } from 'src/app/services/fan.service';
import { Fan } from 'src/app/types/Fan';

@Component({
  selector: 'app-fan-list',
  templateUrl: './fan-list.component.html',
  styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent {
  fanList: Fan[] = [];

  constructor(
    private _fanService: FanService,
    private _router: Router
  ){}

  ngOnInit() {
    this.fanList = this._fanService.getAll();
    // console.log(this.fanList);
    
  }

  toCreate() {
    this._router.navigateByUrl('/fans/create');
  }
}
