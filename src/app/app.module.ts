import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListEmpregadosComponent } from './list-empregados/list-empregados.component';
import { EmpregadosComponent } from './empregados/empregados.component';
import { EmpregadosService } from './servico/empregados.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AdicionarComponent,
    MenuComponent,
    HomeComponent,
    ListEmpregadosComponent,
    EmpregadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [EmpregadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
