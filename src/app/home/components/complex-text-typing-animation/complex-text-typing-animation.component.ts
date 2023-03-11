import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-complex-text-typing-animation',
  templateUrl: './complex-text-typing-animation.component.html',
  styleUrls: ['./complex-text-typing-animation.component.scss'],
})
export class ComplexTextTypingAnimationComponent
  implements OnInit, AfterViewInit
{
  constructor() {}

  @ViewChild('complextTextTypingAnimation')
  typewriterElement: ElementRef<HTMLElement> | null = null;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const target = this.typewriterElement!.nativeElement;

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 500,
      deleteSpeed: 100,
      typeColor: 'white',
    });

    writer
      .type('Paint ')
      .rest(1500)
      .clear()
      .type('See ')
      .rest(800)
      // .changeOps({ typeSpeed: 200 })
      .type('More')
      .rest(800)
      .clear()
      // .changeOps({ typeSpeed: 500 })
      .type('Do More')
      .rest(2000)
      .clear()
      .start();
  }
}
