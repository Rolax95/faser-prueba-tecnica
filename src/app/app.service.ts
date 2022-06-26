import { Injectable } from '@angular/core';
import { Tarea } from './tarea';


@Injectable()
export class AppService { 
    constructor() { }



    public async obtenerTareas() {
        try {
            var tareas: Tarea[] = [];
            tareas.push(new Tarea(1, 'Sacar a pasear al perro', 15));
            tareas.push(new Tarea(2, 'Sacar la basura', 5));
            tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            tareas.push(new Tarea(5, 'Regar las plantas', 20));
            return tareas;
        } catch (error) {
            return null;
        }
    }
    //Método para Insertar las tareas, con comparacion push.
    public async agregarTareas(tareas: Tarea[]) {
        try {
            var titulo=document.getElementById('titulo') as HTMLInputElement;
            var minutos=document.getElementById('minutos') as HTMLInputElement;
            var id=tareas.length+1;

            tareas.push(new Tarea(id,titulo.value,parseInt(minutos.value)))
            return tareas;
        } catch (error) {
            return null;
        }
    }
    //Método para eliminar las tareas, con splice(pocicion,elementos a eliminar).
    public async eliminarTareas(numero:number,tareas){
        try{
            console.log(numero);
            tareas.splice(numero,1);
            return tareas;
        }catch(error){
            return null;
        }
    }
    //Método para Ordenar las tareas, con comparacion sort.
    public async ordenarTareas(tareas: Tarea[]) {
        try {
            tareas.sort((a,b)=>a.minutos - b.minutos);
            return tareas;
        } catch (error) {
            return null;
        }
    }
//Método para resaltar las tareas, con identificadores TAG
    public async destacarTareas(numero:number,tareas) {
        try {
            var tabla=document.getElementById('tabla');
            tabla.getElementsByTagName("tr")[numero+1].style.backgroundColor = '#FF0000	';
            return tareas;
        } catch (error) {
            return null;
        }
    }
}