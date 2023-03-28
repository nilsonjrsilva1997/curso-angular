import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {

  url: string = 'https://loiane.com';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/largura/altura';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nome: string = 'abc';

  nomeDoCurso: string = 'Angular';

  getValor(x: number, y: number) {
    return x + y;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado')
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
    let value = (<HTMLInputElement>evento.target).value;
    console.log(value)
    this.valorAtual = value; 
  }

  salvarValor(value: string) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
