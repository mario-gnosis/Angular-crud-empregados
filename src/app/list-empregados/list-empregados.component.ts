import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmpregadosService } from '../servico/empregados.service';
import { EmpregadoFire } from '../models/empregadoFire';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'list-empregados',
  templateUrl: './list-empregados.component.html',
  styleUrls: ['./list-empregados.component.css']
})
export class ListEmpregadosComponent implements OnInit {

list: EmpregadoFire [];

  constructor(
    private service: EmpregadosService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getEmpregados().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as EmpregadoFire;
      // tslint:disable-next-line:semicolon
      })
    // tslint:disable-next-line:semicolon
    })
  }

onEdit(empregado: EmpregadoFire) {
    this.service.formData = Object.assign({}, empregado);
}

onDelete(id: string) {

  if (confirm('Tem certeza que deseja excluir este empregado?')) {
      this.firestore.doc('empregados/' + id).delete();
      this.toastr.warning('Deletado com sucesso!', 'Registro de empregados');
    }
}

}
