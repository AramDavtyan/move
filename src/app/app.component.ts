import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'move';
  items: any[] = [];
  clickedItem: boolean;
  x;
  y;
  ngOnInit() {
    this.setItems();
  }
  setItems() {
    const array = new Array(20).fill(null);
    array.map((item, index) => this.items[index] = { left: 0, top: 0, number: index + 1 })
  }
  handleMouseDown(e, i) {
    e.preventDefault();
    console.log('sss')
    document.onmousemove = this.elementDrag.bind(this, e, i);
    document.onmouseup = this.elementUp;
  }

  elementUp() {
    console.log('element up');
    document.onmouseup = null;
    document.onmousemove = null;
  }
  elementDrag(e, i) {
    e.preventDefault();
    setTimeout(() => {
      this.items[i].left = this.x - 30;
      this.items[i].top = this.y - 30;
    }, 30 / 60);
    console.log(e)

  }
  handleMouseMove(e) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
