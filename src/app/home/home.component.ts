import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private current: Array<any> = [];

  constructor(
    private http: HttpService,
    private Loading: LoadingService
  ) { }

  ngOnInit() {
    this.getArrivals().then((arrivals: any) => {
      this.Loading.isLoading = false;
    });
  }

  getDepartures(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('departures').subscribe((r: any) => {
        this.current = r;
        resolve(r);
      });
    });
  }

  getArrivals(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('arrivals').subscribe((r: any) => {
        this.current = r;
        resolve(r);
      });
    });
  }
}
