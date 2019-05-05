import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  private clienteIndex: number;
  private isNew: boolean = true;
  private cliente: Cliente;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private clienteService: ClientesService) { }

  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.clienteIndex = +params['id'];
          this.clienteService.get(this.clienteIndex).subscribe(data => this.cliente = data);
        } else {
          this.isNew = true;
        }
      }
    );
  }

  novo() {
    this.cliente = new Cliente();
  }

  cancelar() {
    this.router.navigate
  }

  salvar() {
    let result;
    if(this.isNew) {
      result = this.clienteService.add(this.cliente);
    } else {
      result = this.clienteService.update(this.cliente);
    }
    this.novo();
    result.subscribe(data => alert('sucesso' +data),
    err => {
      alert("An error occurred. "+err);
    });
  } 

  excluir() {
    if(this.cliente.codigo == null) {
      alert("Selecione algum cliente");
    } else {
      if(confirm("Deseja excluir o cliente "+ this.cliente.nome +" ?")) {
        this.clienteService.remove(this.cliente.codigo)
        .subscribe(
          data => this.novo,
          err => {
            alert("Cliente não removido.");
          }
        );
      }
    }
  }

}
