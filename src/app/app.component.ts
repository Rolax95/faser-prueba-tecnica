import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tareas: Tarea[];
	numero=0;

	constructor(
        public service: AppService,
	) { }
	
	ngOnInit() {
		this.obtenerTareas();
	}

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
	}

	async agregarTareas(tareas: Tarea[]){
		this.tareas = await this.service.agregarTareas(this.tareas);
	}

	async eliminarTareas(numero:number,tareas:Tarea[]){
		this.tareas = await this.service.eliminarTareas(numero,this.tareas)
	}

	async ordenarTareas(tareas: Tarea[]){
		this.tareas = await this.service.ordenarTareas(this.tareas);
	}

	async destacarTareas(numero:number,tareas:Tarea[]){
		this.tareas = await this.service.destacarTareas(numero,this.tareas)
	}
}
