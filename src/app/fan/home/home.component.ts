import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LastSegmentService } from 'src/app/services/last-segment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lastSegment!:string;

  constructor(
    private _router: Router,
    private _lastSegmentService: LastSegmentService
  ) {}

  
  ngOnInit() {
    console.log(this._lastSegmentService.lastSegment);
    this.lastSegment = this._lastSegmentService.lastSegment;
    console.log(this.lastSegment);
    }

  toCreate() {
    this._router.navigateByUrl('/fans/create');
    // this._router.navigate(['/fans/create']);
    
    // console.log(this._lastSegmentService.lastSegment);
    this.lastSegment = this._lastSegmentService.lastSegment;
  }

}
