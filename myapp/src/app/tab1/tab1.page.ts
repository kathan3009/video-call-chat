import { Component , ElementRef} from '@angular/core';
import { WebrtcService } from '../providers/webrtc.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  topVideoFrame = 'partner-video';
  userId: string;
  partnerId: string;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;


  constructor(
    public webRTC: WebrtcService,
    public elRef: ElementRef
  ) {}

  init() {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
    this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
    this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  }

  call() {
    this.webRTC.call(this.partnerId);
    this.swapVideo('my-video');
  }

  swapVideo(topVideo: string) {
    this.topVideoFrame = topVideo;
  }
}
