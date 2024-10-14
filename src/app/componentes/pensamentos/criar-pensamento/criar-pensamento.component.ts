import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
pensamento: Pensamento= {
  id: 1,
  conteudo: 'aprendendo angular',
  autoria: 'dev',
  modelo: ''
}

criarPensamento(){
  alert("funcionou")
}
cancelarPensamento(){
  alert("seu pensamento foi cancelado")
}
}
