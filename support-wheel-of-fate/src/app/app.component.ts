import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SupportWheelService } from './support-wheel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor( private http: HttpClient, private supportWheelService: SupportWheelService){}
  title = 'support-wheel-of-fate';
  validEngineers: any;
  ngOnInit() {
    // this.validEngineers = this.supportWheelService.getValidEngineers().subscribe((data: Set<any>) => JSON.stringify(data));
    // this.validEngineers = this.http.get('localhost:3000/valid-engineers');
  }

  ngOnDestroy() {
    // this.validEngineers.unsubscribe();
  }

  getValidEngineers() {
    this.validEngineers = this.http.get('http://localhost:3000/valid-engineers');
  }
}
