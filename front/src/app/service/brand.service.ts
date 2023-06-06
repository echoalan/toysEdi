import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = 'http://localhost:3000/brands';

  constructor(private http: HttpClient) { }

  getBrand(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
  
}
