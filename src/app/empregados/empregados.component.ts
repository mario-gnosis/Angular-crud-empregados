import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { EmpregadosService } from '../servico/empregados.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.css']
})
export class EmpregadosComponent implements OnInit {

  constructor(
    private service: EmpregadosService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  resetForm(form?: NgForm) {

    // tslint:disable-next-line:curly
    if (form != null)
      form.resetForm();
      this.service.formData = {
        id: null,
        name: '',
        idade: null,
        sexo: '',
        setor: '',
        endereco: '',
        cidade: '',
        cargo: '',
        country: '',
      };
  }
  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form: NgForm) {
     const data = Object.assign({}, form.value);
       delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('empregados').add(data);
      this.resetForm(form);
      this.toastr.success('Salvo com sucesso!', 'Registro de empregados');
    } else {
      this.firestore.doc('empregados/' + form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('Alterado com sucesso!', 'Registro de empregados');
    }
  }
}
