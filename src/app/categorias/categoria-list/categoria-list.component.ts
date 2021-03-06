import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { CategoriasModule } from '../categorias.module';
import { CategoriasService } from '../categorias.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  constructor(private categoriaService: CategoriasService) { }

  categorias: Categoria[] = [];

  ngOnInit() {
    this.categoriaService.getAll()
      .subscribe(data => this.categorias = data,
        err => alert('Aconteceu um erro.' + err)
      );
    this.categoriaService.categoriasChanged.subscribe(
      (Observable: any) => Observable.subscribe(
        data => this.categorias = data
      )
    );
  }    

}
