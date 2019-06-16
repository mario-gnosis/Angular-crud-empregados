import { Component, OnInit } from '@angular/core';
import { Empregado } from '../models/empregado';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    // tslint:disable-next-line:member-ordering
    empregadosArray: Empregado[] = [
        // tslint:disable-next-line:max-line-length
    {id: 1, name: 'Mário', idade: 39, sexo: 'Masculino', fone: '123 456 678', setor: 'TI', cidade: 'Lisboa', endereco: 'R Marques Silva, 14 - Arroios', cargo: 'Dev Front-end', country: 'Portugal'},
    // tslint:disable-next-line:max-line-length
    {id: 2, name: 'Ana Luiza', idade: 37, sexo: 'Feminino', fone: '123 456 678', setor: 'Ambiental', cidade: 'Lisboa', endereco: 'R Marques Silva, 14 - Arroios', cargo: 'Gestora Ambiental', country: 'Portugal'},
     // tslint:disable-next-line:max-line-length
    {id: 3, name: 'Marronzinho', idade: 4, sexo: 'Masculino', fone: '123 456 678', setor: 'CASA', cidade: 'Lisboa', endereco: 'R Marques Silva, 14 - Arroios', cargo: 'Boca podi', country: 'Portugal'},
  ];

   // tslint:disable-next-line:member-ordering
  selectEmpregado: Empregado = new Empregado();

  addEmpregado() {

    // tslint:disable-next-line:triple-equals
    if (this.selectEmpregado.id == 0) {
      this.selectEmpregado.id = this.empregadosArray.length + 1;
      this.empregadosArray.push(this.selectEmpregado);
      this.selectEmpregado =  new Empregado();
    } else {
      this.selectEmpregado =  new Empregado();
    }
  }

  openEdit(empregado: Empregado) {
    this.selectEmpregado =  empregado;
  }

  delete() {


    if (confirm('Está seguro da exclusão deste empregado?')) {
      // tslint:disable-next-line:triple-equals
      this.empregadosArray = this.empregadosArray.filter( x => x != this.selectEmpregado);
      this.selectEmpregado =  new Empregado();
    }

  }

}
