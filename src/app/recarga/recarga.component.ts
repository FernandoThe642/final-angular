import { Component, OnInit } from '@angular/core';
import { Recarga } from 'src/app/domain/recarga.ts';
import { RecargasService } from 'src/app/services/recargas.service.ts';
                                
@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.component.html',
  styleUrl: './recarga.component.css'
})
export class RecargaComponent implements OnInit {
  recargas: any

//Crea el nuevo recarga
  recarga: Recarga = new Recarga()

  //Constructor para llamar al recarga que teníamos anteriormente
  constructor(private recargasService: RecargasService){

  }

  ngOnInit(): void {
      this.recargas = this.recargasService.getRecargas()
  }

  guardar(){
    this.recargasService.saveRecarga(this.recarga).subscribe(data => {
      console.log(data)
      if(data.codigo == 1)
        this.ngOnInit()
      else
        alert("Error al insertar " + data.mensaje)
    })
  }

}
