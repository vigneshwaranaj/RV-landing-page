import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  scroll:boolean=false;

  apiData: any;
  shown:boolean = false;
  
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  
  constructor() {}

  ngOnInit() {

    window.addEventListener('scroll', this.scrolling, true)
   
  }

  scrolling=(s:any)=>{
    let sc = s.target.scrollingElement.scrollTop;
       var element:any = document.getElementById('counter_section');
       var position = element.getBoundingClientRect();

        if(position.top >= 0 && position.bottom <= sc && !this.shown) {
        this.animateValue('country', 0, 100, 5000);
        this.animateValue('year', 0, 60, 5000);
        this.animateValue('employee', 0, 3000, 5000);
        this.animateValue('dealers', 0, 4500, 5000);
        this.animateValue('products', 0, 10, 5000);
        this.shown = true;
      }
  }

  ngAfterViewInit(): void {
  
  }

   animateValue(id:any, start:any, end:any, duration:any) {
    let obj:any = document.getElementById(id);
    let startTimestamp:any = null;
    const step = (timestamp:any) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start) + ' +';
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  
}
