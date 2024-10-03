import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectorService {
  private valueSource = new BehaviorSubject<string>('About');
  currentValue = this.valueSource.asObservable();

  changeValue(path: string) {
    this.valueSource.next(path);
  }

  constructor() { }
}
