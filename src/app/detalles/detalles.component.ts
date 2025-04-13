import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';


@Component({
  standalone: true,  // <-- esto te falta
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton
  ]
})
export class DetallesComponent {
  tarea: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController) {
    const id = this.route.snapshot.paramMap.get('id');
    const tareas = JSON.parse(localStorage.getItem('tareas') || '[]');
    this.tarea = tareas.find((t: any) => t.id == id);
  }

  completarTarea() {
    this.tarea.completada = true;
    this.volver();
  }

  volver() {
    this.navCtrl.back();
  }
}

