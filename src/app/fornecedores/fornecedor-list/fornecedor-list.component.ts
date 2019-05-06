import { Component, OnInit } from '@angular/core';
import { Fornecedor } from '../Fornecedor';
import { FornecedoresModule } from '../fornecedores.module';
import { FornecedoresService } from '../fornecedores.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.css']
})
export class FornecedorListComponent implements OnInit {

  constructor(private fornecedorService: FornecedoresService) { }

  fornecedores: Fornecedor[] = [];

  ngOnInit() {
    this.fornecedorService.getAll()
      .subscribe(data => this.fornecedores = data,
        err => alert('Aconteceu um erro.' + err)
      );
    this.fornecedorService.fornecedoresChanged.subscribe(
      (Observable: any) => Observable.subscribe(
        data => this.fornecedores = data
      )
    );
  }    

}
