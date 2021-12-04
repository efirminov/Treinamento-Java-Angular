import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';

@Injectable({
  providedIn: 'root'
})

export class ContaService {
  api = `${environment.api}/conta/`;
  constructor(private http: HttpClient) { }

  listarTodasConta(){
    return this.http.get<IConta[]>(this.api);
  }

}
