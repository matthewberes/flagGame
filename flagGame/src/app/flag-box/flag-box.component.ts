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

  constructor(public ms: MainServiceService) { }

  ngOnInit() {
    this.ms.currCountryNum = Math.floor(Math.random() * (this.ms.fileNames.length - 1))
    this.currFile = "./assets/svg/" + this.ms.fileNames[this.ms.currCountryNum];
    this.ms.currCountry = this.ms.fileNames[this.ms.currCountryNum].substring(0, this.ms.fileNames[this.ms.currCountryNum].length - 4);
    this.ms.randomNumbers.next(this.ms.createRandomNumbers(this.ms.currCountryNum));

    this.ms.randomNumbers.subscribe(resp => {
      if (!this.ms.checkIfRandom(resp)) {
        this.ms.randomNumbers.next(this.ms.createRandomNumbers(this.ms.currCountryNum))
      } else {
        this.currFile = "./assets/svg/" + this.ms.fileNames[this.ms.currCountryNum];
      }
    });

    console.log(this.ms.currCountryNum);
    console.log(this.ms.randomNumbers.value)
  }
}
