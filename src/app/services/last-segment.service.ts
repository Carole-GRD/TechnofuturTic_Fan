import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastSegmentService {

  lastSegment: string = 'create'; 

  constructor() { }
}
