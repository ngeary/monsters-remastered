import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { OpponentComponent } from './opponent/opponent.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PlayerMonsterComponent } from './player-monster/player-monster.component';
import { OppMonsterComponent } from './opp-monster/opp-monster.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    OpponentComponent,
    InputOutputComponent,
    PlayerMonsterComponent,
    OppMonsterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
