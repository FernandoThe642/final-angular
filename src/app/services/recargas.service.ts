import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recarga } from '../domain/recarga';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  constructor(private http: HttpClient) { }

  realizarRecarga(recarga: Recarga) {

  }
}
