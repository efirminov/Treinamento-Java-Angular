import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  contas: IConta[] = [];

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.listarTodasContas();
  }

  listarTodasContas() {
    this.contaService.listarTodasConta().subscribe(contasApi => {
      this.contas = contasApi;
    });
  }

}
