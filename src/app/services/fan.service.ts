import { Injectable } from '@angular/core';
import { Fan } from '../types/Fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

    private _fans: Fan[] = [
      new Fan(1, 'Pierre', new Date(1996, 5, 13), ['The Boys', 'One piece', 'Trigun']),
      new Fan(2, 'Ryan', new Date(1998, 4, 13), ['The Boys', 'One piece', 'Naruto']),
    ]

  constructor() { }

  getAll() {
    return this._fans;
  }

  getOne(id: number) {
    return this._fans.find(fan => fan.id === id);
  }
}
