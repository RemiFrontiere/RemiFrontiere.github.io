import { Component, OnDestroy, ChangeDetectorRef, HostListener, Inject } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import {TranslateService} from '@ngx-translate/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.scss']
})
export class HomeComponentMain implements OnDestroy {
  
  public audio:HTMLAudioElement;
  public isScrolled:boolean = false;
  public stargateisTurning:boolean = false;
  public stargateNumberOfSymbols:Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
  public stargateExtBorderNumber:[] = Array.apply(null, {length: 150}).map(Function.call, Number);
  // public mobileQuery: MediaQueryList;
  // private _mobileQueryListener: () => void;

  constructor(
    // changeDetectorRef: ChangeDetectorRef, 
    // media: MediaMatcher, 
    public translate: TranslateService) {

    // this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);

    translate.setDefaultLang('fr');
    translate.use('fr');
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public changeLang():void{
    this.translate.currentLang == 'fr' ? this.translate.use('en') :  this.translate.use('fr')
  }

  public rotateStargate():void{
    this.stargateisTurning = !this.stargateisTurning;
    if(this.stargateisTurning){
      this.audio = new Audio();
      this.audio.src = "assets/audio/roll.mp3";
      this.audio.load(); 
      this.audio.loop = true;
      this.audio.play();
      this.audio.volume = 0.05;
    }
    else{
      if(this.audio){
        this.audio.pause();
      }
    }
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}

