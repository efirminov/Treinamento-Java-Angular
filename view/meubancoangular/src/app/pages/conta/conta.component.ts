import { Component, OnInit } from '@angular/core';
import { IConta } from 'src/app/interfaces/conta';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContasComponent implements OnInit {

  contas: IConta[] = [];

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.listarContas();
  }

  listarContas() {
    this.contaService.listarTodasContas().subscribe(contasAPI => {
      this.contas = contasAPI;
    })
  }

}
