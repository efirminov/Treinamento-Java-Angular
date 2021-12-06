import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saque-deposito';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {


  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
  });

  sacar() {
    const saque: ISaqueDeposito = this.formGroup.value;
    this.contaService.saque(saque).subscribe(contaApi => {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Cadastrado com sucesso',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/conta']);
    }, error => {
      console.error(error)
    });


  }
}
