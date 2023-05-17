import { Component, Input, NgModule } from '@angular/core';


@Component({
  selector: 'app-progbar',
  templateUrl: './progbar.component.html',
  styleUrls: ['./progbar.component.css']
})

export class ProgbarComponent {
	@Input() exercise: string;
  @Input() percentage: number;
  
}
