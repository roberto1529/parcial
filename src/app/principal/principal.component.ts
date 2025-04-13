import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { IonHeader, IonLabel,IonToolbar,IonButton, IonCheckbox  ,IonTitle, IonContent, IonInput, IonItem, IonList, IonToast } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  imports:[IonHeader, IonToolbar, IonTitle,IonLabel, CommonModule,IonButton,FormsModule, IonCheckbox, IonContent, IonItem, IonList],
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  tareas!: any[];


  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {
      // Inicializamos las tareas y las guardamos en localStorage
  this.tareas = [
    { id: 1, titulo: 'Hacer ejercicio', prioridad: 'Alta', completada: false, descripcion: '30 minutos de cardio', fecha: '2025-04-12' },
    { id: 2, titulo: 'Estudiar para el parcial', prioridad: 'Media', completada: false, descripcion: 'Repasar Ionic y Angular', fecha: '2025-04-15' },
    { id: 3, titulo: 'Comprar víveres', prioridad: 'Baja', completada: false, descripcion: 'Leche, pan, frutas' },
    { id: 4, titulo: 'Llamar a mamá', prioridad: 'Media', completada: false, descripcion: 'Preguntar cómo está' },
    { id: 5, titulo: 'Leer un libro', prioridad: 'Baja', completada: false, descripcion: 'Capítulo 5 de Clean Code' }
  ];

  localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  verDetalles(tarea: any) {
    this.navCtrl.navigateForward(`/detalles/${tarea.id}`);
  }

  obtenerColorPrioridad(prioridad: string): any {
    switch (prioridad) {
      case 'Alta': return 'red';
      case 'Media': return 'orange';
      case 'Baja': return 'green';
      default: return 'black';
    }
  }

  async completarTarea(tarea: any) {
    const toast = await this.toastCtrl.create({
      message: '¡Tarea terminada!',
      duration: 1500,
      color: 'success'
    });
    await toast.present();
  }

  agregarTarea() {
    const nuevaTarea = {
      id: this.tareas.length + 1,
      titulo: 'Nueva Tarea'+ this.tareas.length + 1,
      prioridad: 'Media',
      completada: false,
      descripcion: 'Descripción de ejemplo'
    };
    this.tareas.push(nuevaTarea);
  }
}
