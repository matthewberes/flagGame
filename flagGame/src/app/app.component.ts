import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameChoiceBoxComponent } from './game-choice-box/game-choice-box.component';
import { GameFlagBoxComponent } from './game-flag-box/game-flag-box.component';
import { GameFooterComponent } from './game-footer/game-footer.component';
import { GameHeaderComponent } from './game-header/game-header.component';
import { GameScoreBoxComponent } from './game-score-box/game-score-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameHeaderComponent, GameFlagBoxComponent, GameChoiceBoxComponent, GameScoreBoxComponent, GameFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flagGame';
}
