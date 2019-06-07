import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsuariosService {

  private url: string = 'http://localhost:8080/usuarios';

  usuariosChanged = new EventEmitter<Observable<Usuario[]>>();

  constructor(private http: Http) { }

  get(id: number) {
    return this.getAll()
      .map((list: any) => list.find(usuario => usuario.codigo == id))
      .catch(this.handleError);
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get(this.url).map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', erro);
    return Observable.throw(erro);
  }

}
