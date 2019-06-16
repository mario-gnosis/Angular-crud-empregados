import { Injectable } from '@angular/core';
import { EmpregadoFire } from '../models/empregadoFire';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpregadosService {

  formData: EmpregadoFire;

  constructor(private firestore: AngularFirestore) { }

  getEmpregados() {
    return this.firestore.collection('empregados').snapshotChanges();
  }

}
