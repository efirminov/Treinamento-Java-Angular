import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}/clientes/`;
  constructor(private http: HttpClient) { }

  allCliente(){
    return this.http.get<ICliente[]>(this.api);
  }

  createClient(cliente: ICliente){
    return this.http.post<ICliente>(this.api, cliente);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
