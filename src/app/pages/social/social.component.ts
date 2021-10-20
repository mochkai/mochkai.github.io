import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';

declare let Twitch: any;

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  private scriptLoader: Promise<any>;

  constructor(private scriptService: ScriptService) {
    this.scriptLoader = this.scriptService.load('twitchEmbed');
  }

  ngOnInit(): void {
    this.scriptLoader.then((script) => {
      if (script[0].loaded) {
        new Twitch.Embed("twitch-live", {
          width: '100%',
          height: 600,
          theme: 'dark',
          channel: "mochkai",
          autoplay: true
        });
      }
    });
  }

}
