import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupportWheelService {

  constructor(private http: HttpClient) { }

  getValidEngineers() {
    return this.http.get('localhost:3000/valid-engineers');
    // return 'Valid engineers';
  }
}
