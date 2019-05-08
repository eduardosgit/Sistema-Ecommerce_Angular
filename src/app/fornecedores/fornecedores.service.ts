import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Fornecedor } from './fornecedor';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class FornecedoresService {

  private url: string = 'http://localhost:8080/fornecedores';

  fornecedoresChanged = new EventEmitter<Observable<Fornecedor[]>>();

  constructor(private http: Http) { }

  get(id: number) {
    return this.getAll()
      .map((list: any) => list.find(fornecedor => fornecedor.codigo == id))
      .catch(this.handleError);
  }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get(this.url).map(res => res.json()).catch(this.handleError);
  }

  add(fornecedor: Fornecedor) {
    return this.http.post(this.url, JSON.stringify(fornecedor), { headers: this.getHeaders() })
      //.map(res => res.json())
      .do(data => this.fornecedoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.url+"/"+id, { headers: this.getHeaders() })
      .map(res => res.json())
      .do(data => this.fornecedoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }

  update(fornecedor: Fornecedor) {
    return this.http.put(this.url, JSON.stringify(fornecedor), { headers: this.getHeaders() })
      //.map(res => res.json().data)
      .do(data => this.fornecedoresChanged.emit(this.getAll()))
      .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  /*private getUrl(id: number) {
    return '${this.url}/${id}';
  }*/

  private handleError(error: any) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro', erro);
    return Observable.throw(erro);
  }

}
