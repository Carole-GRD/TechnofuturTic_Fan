import { Component, OnInit, /*EventEmitter, Output*/ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastSegmentService } from 'src/app/services/last-segment.service';

@Component({
  selector: 'app-fan-create',
  templateUrl: './fan-create.component.html',
  styleUrls: ['./fan-create.component.scss']
})
export class FanCreateComponent implements OnInit {

  lastSegment!: string;

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _lastSegmentService: LastSegmentService
  ) {}

  ngOnInit() {
    this.lastSegment  = this._activatedRouter.snapshot.url[this._activatedRouter.snapshot.url.length -1].path;
    console.log('fan : ', this.lastSegment ); 
    // OU 
    // this.segment  = this._activatedRouter.snapshot.url;
    // this.lastSegment = this.segment.pop().path;
    // console.log(this.lastSegment ); 

    this._lastSegmentService.lastSegment = this.lastSegment;
  }
}
