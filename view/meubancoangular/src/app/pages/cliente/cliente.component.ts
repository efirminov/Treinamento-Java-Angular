import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ICliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes(){
    this.clienteService.listarTodosClientes().subscribe(clientesApi => {
      this.clientes = clientesApi;
    })
  }

}
