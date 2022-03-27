import { Component } from '@angular/core';
import index from "@angular/core/schematics/migrations/router-link-empty-expression";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public blocks : {text: string; color: string; boldSelected:boolean, italicSelected
  :boolean} [] = [];

  //elements: Array<any> = [];

  addBlock(block: {text: string; color: string; boldSelected:boolean; italicSelected
      :boolean}) {
    this.blocks.push(block);
  }

  removeBlock (block: {text: string; color: string; boldSelected:boolean; italicSelected
      :boolean}) {
    let index = this.blocks.indexOf(block);
    if (index> -1) {
      this.blocks.splice(index, 1);
    }
  }


}
