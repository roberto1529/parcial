import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonToast } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ReactiveFormsModule,IonInput, IonItem, IonList, IonToast],
})
export class HomePage implements OnInit {
  fb: FormGroup; //formulario agrupado
  auth = {user: 'usuario1', pass: 'Pass1243'}
  isToastOpen = false;
  message:string = '';
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.fb = this.formBuilder.group({
      email: ['', [Validators.required ]],
      pass: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // para prueba de login
    this.fb.patchValue({
      email: this.auth.user,
      pass: this.auth.pass
    })
  }

  public onSubmit(): void{
      console.log('formulario', this.fb.value);
      this.isToastOpen = true;
    if (this.fb.get('email')?.value !== this.auth.user || this.fb.get('pass')?.value !== this.auth.pass) {
        this.message = 'Correo y/o clave invalidos';
    }else{
        console.log('navegando a otra pestaña');
        this.router.navigate(['/principal'])
    }

  }

  // manejo de errores
  public mensajeError(campo: string, error: string): boolean {
    const control = this.fb.get(`${campo}`);
    return (
      control! && control.hasError(error) && (control.dirty || control.touched)
    );
  }
}
