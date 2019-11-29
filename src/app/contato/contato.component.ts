import { Component, OnInit } from '@angular/core';

import { Contatos} from '../contato';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {}

    salvar(nome: string, telefone: string, idade: number){
     this.contatoService.insert({ nome, telefone, idade} as Contatos);
}
  }

