import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  @Output()
  addBlock:EventEmitter<{
    text: string;
    color: string;
    boldSelected:boolean,
    italicSelected:boolean,
  }>  =  new EventEmitter <{text: string; color: string; boldSelected: boolean; italicSelected: boolean}>();



  public colors: string[] = ['Blue','Red','Orange'];

  public text: string = '';
  public isItalic: boolean = false;
  public isBold: boolean = false;
  public selectedColor: string = '';


  public Bold() {
    this.isBold=!this.isBold;
  }
  public Italic() {
    this.isItalic=!this.isItalic;
  }

  public selectColor(color: string): void {
    this.selectedColor = color;
  }


 public submit():void {
    const block = {
      text: this.text,
      color: this.selectedColor,
      boldSelected: this.isBold,
      italicSelected: this.isItalic,
    }
    this.addBlock.emit(block);
   this.selectedColor = '';
   this.isBold = false;
   this.isItalic = false;
   this.text = 'default';
  }

}
