import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao-clientes',
  templateUrl: './cadastro-edicao-clientes.component.html',
  styleUrls: ['./cadastro-edicao-clientes.component.css']
})
export class CadastrarEditarClienteComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    observacoes: new FormControl(''),
    ativo: new FormControl(true)
  });


  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  enviar() {
    const cliente: ICliente = this.formGroup.value;
    this.clienteService.createClient(cliente).subscribe(clienteApi => {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cadastrado com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      console.log(clienteApi);
      this.router.navigate(['/clientes']);
    }, error => {
      console.error(error)
    })
  }

}
