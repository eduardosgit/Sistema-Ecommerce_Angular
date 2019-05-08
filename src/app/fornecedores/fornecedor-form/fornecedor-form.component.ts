import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedoresService } from '../fornecedores.service';
import { Fornecedor } from '../fornecedor';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit {

  private fornecedorIndex: number;
  private isNew: boolean = true;
  private fornecedor: Fornecedor;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private fornecedorService: FornecedoresService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false;
          this.fornecedorIndex = +params['id'];
          this.fornecedorService.get(this.fornecedorIndex).subscribe(data => this.fornecedor = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.fornecedor = new Fornecedor();
  }

  cancelar() {
    this.voltar();
  }

  voltar() {
    this.router.navigate(['/fornecedores']);
  }

  salvar() {
    let result;
    if (this.isNew) {
      result = this.fornecedorService.add(this.fornecedor);
    } else {
      result = this.fornecedorService.update(this.fornecedor);
    }
    this.novo();
    this.voltar();
    result.subscribe(data => alert('Sucesso' + data),
      err => {
        alert("An error occurred. " + err);
      });
  }

  excluir() {
    if (this.fornecedor.codigo == null) {
      alert("Selecione algum fornecedor");
    } else {
      if (confirm("Deseja excluir o fornecedor " + this.fornecedor.nome + " ?")) {
        this.fornecedorService.remove(this.fornecedor.codigo)
          .subscribe(
            data => alert('Fornecedor removido ' + data),
            err => {
              alert("Erro ao tentar remover o fornecedor. "+err);
            });
        this.novo();
        this.voltar();
      }
    }
  }

}
