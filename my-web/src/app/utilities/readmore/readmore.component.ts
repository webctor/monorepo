import {Component, OnInit, OnChanges, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'my-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadMoreComponent implements OnChanges {
  @Input() text: string;
  @Input() maxLength: number = 100;
  currentText: string;
  hideToggle: boolean = true;

  public isCollapsed: boolean = true;

  constructor(private elementRef: ElementRef) {

  }
  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }
  determineView() {
    if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }
    this.hideToggle = false;
    if (this.isCollapsed == true) {
      this.currentText = this.text.substring(0, this.maxLength) + "...";
    } else if(this.isCollapsed == false)  {
      this.currentText = this.text;
    }

  }
  ngOnChanges() {
    this.determineView();
  }
}
