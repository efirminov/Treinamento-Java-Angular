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
    this.clienteService.allCliente().subscribe(clientesApi => {
      this.clientes = clientesApi;
    });
  }

  deletar(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "Não tem como reverter essa ação",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCliente(id).subscribe(clientesApi => {
          Swal.fire(
            'Deletado',
            'Cliente deletado com sucesso',
            'success'
          );
          this.listarTodosClientes()
        }, error => {
          console.error(error)
        })

      }
    })
  }

}
