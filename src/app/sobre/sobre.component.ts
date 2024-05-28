import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  id: number = 0;
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(res => this.id = res['id']);
  }
}
