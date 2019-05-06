import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClientesModule } from '../clientes.module';
import { ClientesService } from '../clientes.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clienteService.getAll()
    .subscribe(data => this.clientes = data, 
      err => alert('Aconteceu um erro.'. +err)
    );
    this.clienteService.clientesChanged.subscribe(
      (Observable: any) => Observable.subscribe(
        data => this.clientes = data
      )
    );
  }    

      /* [{
      'codigo': 1,
      'nome': 'Carlos',
      'cargo': 'Professor',
      'endereco': 'Rua Roma, 39, Tibery',
      'cidade': 'Uberlândia',
      'cep': '38400-165',
      'pais': 'Brasil',
      'telefone': '34996784084',
      'fax': '34343444'
    },
    {
      'codigo': 2,
      'nome': 'Maria',
      'cargo': 'Supervisor',
      'endereco': 'Rua Aristides Franco, 123, Martins',
      'cidade': 'Uberlândia',
      'cep': '38400-362',
      'pais': 'Brasil',
      'telefone': '34996712567',
      'fax': '34343444'
    }
    ]
  } */

}
