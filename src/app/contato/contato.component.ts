import { Component, OnInit } from '@angular/core';

import { Contatos} from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatosComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {}

    salvar(nome: string, telefone: string){
     this.contatoService.insert({ nome, telefone} as Contatos);
}
  }

