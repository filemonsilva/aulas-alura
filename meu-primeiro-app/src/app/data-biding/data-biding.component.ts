import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Filemon";
  public idade: number = 32;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Criar-um-Site.png";
  public imgTitle: string = "Property Binding";

  public position: {x: number, y: number} = {x: 0, y: 0}

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    console.log("Valor: ", valor);

  }

  public mouseMoveTeste(valor: MouseEvent){
    console.log("Valor: ", valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

}
