import { Component, OnInit } from '@angular/core';

import { Contatos} from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Contatos[];

  constructor(private contatoService: ContatoService){}



  ngOnInit() {
    this.getContatos();
  }

  getContatos(){
    this.contatoService.getAll().
            subscribe(contatos => this.contatos = contatos);
  }

}