import { Component, OnInit } from '@angular/core';
import { ChoiceButtonComponent } from '../choice-button/choice-button.component';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-choice-box',
  standalone: true,
  imports: [ChoiceButtonComponent],
  templateUrl: './choice-box.component.html',
  styleUrl: './choice-box.component.css'
})
export class ChoiceBoxComponent implements OnInit {
  options: number[] = []
  constructor(public ms: MainServiceService) { }

  ngOnInit(): void {
    this.options = this.shuffleArray(this.ms.randomNumbers.value)
  }

  shuffleArray(arr: number[]) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr
  }

  getCountryName(cur: number) {
    return this.ms.fileNames[cur].substring(0, this.ms.fileNames[cur].length - 4)
  }
}
