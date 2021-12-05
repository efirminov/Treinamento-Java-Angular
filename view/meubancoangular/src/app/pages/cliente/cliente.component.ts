import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ICliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe(clientesApi => {
      this.clientes = clientesApi;
    });
  }

  confirmar(id: number) {
    Swal.fire({
      title: 'Você quer deletar?',
      text: "Isso não vai voltar mais nunca, quer mesmo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Vai logo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.remover(id).subscribe(result => {
          Swal.fire(
            'Removido!',
            'Seu cliente foi removido com sucesso!',
            'success'
          );
          this.listarTodosClientes();
        }, error => {
          console.error(error);
        });
      }
    })
  }

}
