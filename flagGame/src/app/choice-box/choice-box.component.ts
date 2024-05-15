import { Component } from '@angular/core';
import { ChoiceButtonComponent } from '../choice-button/choice-button.component';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-choice-box',
  standalone: true,
  imports: [ChoiceButtonComponent],
  templateUrl: './choice-box.component.html',
  styleUrl: './choice-box.component.css'
})
export class ChoiceBoxComponent {
  constructor(public ms: MainServiceService) { }

  getCountryName(cur: number) {
    return this.ms.fileNames[cur].substring(0, this.ms.fileNames[cur].length - 4)
  }
}
