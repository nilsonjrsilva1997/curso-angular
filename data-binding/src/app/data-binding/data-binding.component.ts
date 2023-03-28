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

  getValor(x: number, y: number) {
    return x + y;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
