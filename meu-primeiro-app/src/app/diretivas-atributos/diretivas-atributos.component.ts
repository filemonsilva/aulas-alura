import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  constructor() { }

  public valor: boolean = true;
  public height: string = "20px";
  public backgroundColor: string = "red";

  public nome: string = "";
  public list: Array<{nome: string}> = [{nome: "Filemon Teófilo"}];

  public date: Date = new Date();

  ngOnInit(): void {
    setInterval(() => {
      if(this.valor) {
        this.valor = false;

      } else {
        this.valor = true;
      }

      if(this.height == "20px") {
        this.height = "50px";
        this.backgroundColor = "blue";
      }else {
        this.height = "20px";
        this.backgroundColor = "red";
      }
    }, 2000)
  }

  public salvar(): void {
    this.list.push({nome: this.nome});
    this.nome = "";
  }


}
