import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
@Component({
  selector: 'app-flag-box',
  standalone: true,
  imports: [],
  templateUrl: './flag-box.component.html',
  styleUrl: './flag-box.component.css'
})
export class FlagBoxComponent implements OnInit {
  currFile: string = "";

  constructor(private ms: MainServiceService) { }

  ngOnInit() {
    this.ms.currCountryNum = Math.floor(Math.random() * (this.ms.fileNames.length - 1))
    this.currFile = "./assets/svg/" + this.ms.fileNames[this.ms.currCountryNum];
    this.ms.currCountry = this.ms.fileNames[this.ms.currCountryNum].substring(0, this.ms.fileNames[this.ms.currCountryNum].length - 4);
    this.ms.randomNumbers.next(this.createRandomNumbers(this.ms.currCountryNum));

    this.ms.randomNumbers.subscribe(resp => {
      if (!this.checkIfRandom(resp)) {
        this.ms.randomNumbers.next(this.createRandomNumbers(this.ms.currCountryNum))
      }
    });

    console.log(this.ms.currCountryNum);
    console.log(this.ms.randomNumbers.value)
  }

  createRandomNumbers(cur: number): number[] {
    let randomNum1 = Math.floor(Math.random() * (this.ms.fileNames.length - 1));
    let randomNum2 = Math.floor(Math.random() * (this.ms.fileNames.length - 1));
    let randomNum3 = Math.floor(Math.random() * (this.ms.fileNames.length - 1));
    return [cur, randomNum1, randomNum2, randomNum3]
  }

  checkIfRandom(arr: number[]): boolean {
    if (arr[0] != arr[1] && arr[0] != arr[2] && arr[0] != arr[3] && arr[1] != arr[2] && arr[1] != arr[3] && arr[2] != arr[3]) {
      return true
    } else {
      return false
    }
  }
}
