import { Component } from '@angular/core';
import { ChoiceButtonComponent } from '../choice-button/choice-button.component';

@Component({
  selector: 'app-choice-box',
  standalone: true,
  imports: [ChoiceButtonComponent],
  templateUrl: './choice-box.component.html',
  styleUrl: './choice-box.component.css'
})
export class ChoiceBoxComponent {

}
