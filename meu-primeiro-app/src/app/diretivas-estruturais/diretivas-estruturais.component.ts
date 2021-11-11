import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Filemon", idade: 32},
    {nome: "Taiana", idade: 34},
    {nome: "Theo", idade: 2}
  ];
  public nome: string = "taiana";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000)
  }

  public onClick() {
    if(this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAdd() {
    this.list.push({nome: "Nay", idade: 31});
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }


}
