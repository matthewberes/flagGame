import { Component, Input } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-choice-button',
  standalone: true,
  imports: [],
  templateUrl: './choice-button.component.html',
  styleUrl: './choice-button.component.css'
})
export class ChoiceButtonComponent {
  @Input() value!: string
  constructor(public ms: MainServiceService) { }

}
