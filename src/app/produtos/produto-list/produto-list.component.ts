import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutosModule } from '../produtos.module';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  constructor(private produtoService: ProdutosService) { }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.getAll().subscribe(data => this.produtos = data, err => {
      alert('Aconteceu um erro.');
    });
  }

}
