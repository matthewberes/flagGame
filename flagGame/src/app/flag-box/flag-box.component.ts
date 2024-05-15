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
    let num = Math.floor(Math.random() * (this.ms.fileNames.length - 1))
    this.currFile = "./assets/svg/" + this.ms.fileNames[num];
    this.ms.currCountry = this.ms.fileNames[num].substring(0, this.ms.fileNames[num].length - 4);
    this.ms.randomNumbers.next(this.createRandomNumbers(num));

    this.ms.randomNumbers.subscribe(resp => {
      if (!this.checkIfRandom(num, resp[0], resp[1], resp[2])) {
        this.ms.randomNumbers.next(this.createRandomNumbers(num))
      }
    });

    console.log(num);
    console.log(this.ms.randomNumbers.value)
  }

  createRandomNumbers(cur: number): number[] {
    let randomNum1 = Math.floor(Math.random() * (this.ms.fileNames.length - 1));
    let randomNum2 = Math.floor(Math.random() * (this.ms.fileNames.length - 1));
    let randomNum3 = Math.floor(Math.random() * (this.ms.fileNames.length - 1));
    return [randomNum1, randomNum2, randomNum3]
  }

  checkIfRandom(cur: number, randomNum1: number, randomNum2: number, randomNum3: number): boolean {
    if (cur != randomNum1 && cur != randomNum2 && cur != randomNum3 && randomNum1 != randomNum2 && randomNum1 != randomNum3 && randomNum2 != randomNum3) {
      return true
    } else {
      return false
    }
  }
}
