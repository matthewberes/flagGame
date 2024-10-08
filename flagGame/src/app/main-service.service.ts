import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  fileNames: string[] = ["afghanistan.svg", "aland.svg", "albania.svg", "algeria.svg", "american samoa.svg", "andorra.svg", "angola.svg", "anguilla.svg", "antarctica.svg", "antigua and barbuda.svg", "argentina.svg", "armenia.svg", "aruba.svg", "australia.svg", "austria.svg", "azerbaijan.svg", "bahamas.svg", "bahrain.svg", "bangladesh.svg", "barbados.svg", "belarus.svg", "belgium.svg", "belize.svg", "benin.svg", "bermuda.svg", "bhutan.svg", "bolivia.svg", "bosnia and herzegovina.svg", "botswana.svg", "bouvet island.svg", "brazil.svg", "british indian ocean territory.svg", "british virgin islands.svg", "brunei.svg", "bulgaria.svg", "burkina faso.svg", "burundi.svg", "cambodia.svg", "cameroon.svg", "canada.svg", "cape verde.svg", "caribbean netherlands.svg", "cayman islands.svg", "central african republic.svg", "chad.svg", "chile.svg", "china.svg", "christmas island.svg", "cocos.svg", "colombia.svg", "comoros.svg", "cook islands.svg", "costa rica.svg", "croatia.svg", "cuba.svg", "curacao.svg", "cyprus.svg", "czech.svg", "democratic republic of the congo.svg", "denmark.svg", "djibouti.svg", "dominica.svg", "dominican republic.svg", "ecuador.svg", "egypt.svg", "el salvador.svg", "england.svg", "equatorial guinea.svg", "eritrea.svg", "estonia.svg", "eswatini.svg", "ethiopia.svg", "falkland.svg", "faroe islands.svg", "fiji.svg", "finland.svg", "france.svg", "french guiana.svg", "french polynesia.svg", "french southern territories.svg", "gabon.svg", "gambia.svg", "georgia.svg", "germany.svg", "ghana.svg", "gibraltar.svg", "greece.svg", "greenland.svg", "grenada.svg", "guadeloupe.svg", "guam.svg", "guatemala.svg", "guernsey.svg", "guinea-bissau.svg", "guinea.svg", "guyana.svg", "haiti.svg", "heard and mcdonald islands.svg", "honduras.svg", "hong kong.svg", "hungary.svg", "iceland.svg", "india.svg", "indonesia.svg", "iran.svg", "iraq.svg", "ireland.svg", "isle of man.svg", "israel.svg", "italy.svg", "ivory coast.svg", "jamaica.svg", "japan.svg", "jersey.svg", "jordan.svg", "kazakhstan.svg", "kenya.svg", "kiribati.svg", "kosovo.svg", "kuwait.svg", "kyrgyzstan.svg", "laos.svg", "latvia.svg", "lebanon.svg", "lesotho.svg", "liberia.svg", "libya.svg", "liechtenstein.svg", "lithuania.svg", "luxembourg.svg", "macau.svg", "madagascar.svg", "malawi.svg", "malaysia.svg", "maldives.svg", "mali.svg", "malta.svg", "marshall islands.svg", "martinique.svg", "mauritania.svg", "mauritius.svg", "mayotte.svg", "mexico.svg", "micronesia.svg", "moldova.svg", "monaco.svg", "mongolia.svg", "montenegro.svg", "montserrat.svg", "morocco.svg", "mozambique.svg", "myanmar.svg", "nambia.svg", "nauru.svg", "nepal.svg", "netherlands.svg", "new caledonia.svg", "new zealand.svg", "nicaragua.svg", "niger.svg", "nigeria.svg", "niue.svg", "norfolk island.svg", "north korea.svg", "north macedonia.svg", "northern ireland.svg", "northern mariana islands.svg", "norway.svg", "oman.svg", "pakistan.svg", "palau.svg", "palestine.svg", "panama.svg", "papua new guinea.svg", "paraguay.svg", "peru.svg", "philippines.svg", "pitcairn islands.svg", "poland.svg", "portugal.svg", "puerto rico.svg", "qatar.svg", "republic of the congo.svg", "reunion.svg", "romania.svg", "russia.svg", "rwanda.svg", "saint barthélemy.svg", "saint helena, ascension and tristan da cunha.svg", "saint kitts and nevis.svg", "saint lucia.svg", "saint martin.svg", "saint pierre and miquelon.svg", "saint vincent and the grenadines.svg", "samoa.svg", "san marino.svg", "sao tome and principe.svg", "saudi arabia.svg", "scotland.svg", "senegal.svg", "serbia.svg", "seychelles.svg", "sierra leone.svg", "singapore.svg", "sint maarten.svg", "slovakia.svg", "slovenia.svg", "solomon islands.svg", "somalia.svg", "south africa.svg", "south georgia.svg", "south korea.svg", "south sudan.svg", "spain.svg", "sri lanka.svg", "sudan.svg", "suriname.svg", "svalbard and jan mayen.svg", "sweden.svg", "switzerland.svg", "syria.svg", "taiwan.svg", "tajikistan.svg", "tanzania.svg", "thailand.svg", "timor-leste.svg", "togo.svg", "tokelau.svg", "tonga.svg", "trinidad and tobago.svg", "tunisia.svg", "turkey.svg", "turkmenistan.svg", "turks and caicos islands.svg", "tuvalu.svg", "u.s. virgin islands.svg", "uganda.svg", "ukraine.svg", "united arab emirates.svg", "united kingdom.svg", "united states of america.svg", "uruguay.svg", "uzbekistan.svg", "vanuatu.svg", "vatican city.svg", "venezuela.svg", "vietnam.svg", "wales.svg", "wallis and futuna.svg", "western sahara.svg", "yemen.svg", "zambia.svg", "zimbabwe.svg"]
  currFile: string = "";
  currCountry: string = "";
  currCountryNum: number = 0;
  randomNumbers: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);


  newFlag() {
    this.currCountryNum = Math.floor(Math.random() * (this.fileNames.length - 1))
    this.currFile = "./assets/svg/" + this.fileNames[this.currCountryNum];
    this.currCountry = this.fileNames[this.currCountryNum].substring(0, this.fileNames[this.currCountryNum].length - 4);
    this.randomNumbers.next(this.createRandomNumbers(this.currCountryNum));
  }

  createRandomNumbers(cur: number): number[] {
    let randomNum1 = Math.floor(Math.random() * (this.fileNames.length - 1));
    let randomNum2 = Math.floor(Math.random() * (this.fileNames.length - 1));
    let randomNum3 = Math.floor(Math.random() * (this.fileNames.length - 1));
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
