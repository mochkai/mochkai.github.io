import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { INSTAGRAM_FEED } from 'src/app/data/instagram-embed';
import { ScriptService } from 'src/app/services/script.service';

declare let Twitch: any;
declare let instgrm: any;

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  instagramEmbed: any = null;
  twitterFeed: any = null;

  private scriptLoader: Promise<any>;

  constructor(private scriptService: ScriptService, private sanitizer: DomSanitizer) {
    this.scriptLoader = this.scriptService.load('twitchEmbed', 'instagramEmbed', 'twitterEmbed');
    this.instagramEmbed = this.sanitizer.bypassSecurityTrustHtml(INSTAGRAM_FEED.replace('_postID_', 'CVUYvASop3t'));

    this.twitterFeed = `<a class="twitter-timeline" data-height="800" data-theme="dark"
      href="https://twitter.com/Mochkai2?ref_src=twsrc%5Etfw">Tweets by
      Mochkai2</a>`;
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
