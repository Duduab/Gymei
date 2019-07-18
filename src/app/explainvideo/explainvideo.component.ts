import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explainvideo',
  templateUrl: './explainvideo.component.html',
  styleUrls: ['./explainvideo.component.scss']
})
export class ExplainvideoComponent implements OnInit {
  player: YT.Player;
  private id: string = 'YdB1HMCldJY';
  private height: number = 420;
  private width: number = 620;

  constructor() { }

  ngOnInit() {
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
