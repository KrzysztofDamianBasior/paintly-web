import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-typing-animation',
  templateUrl: './text-typing-animation.component.html',
  styleUrls: ['./text-typing-animation.component.scss'],
})
export class TextTypingAnimationComponent implements OnInit {
  constructor() {}

  @Input() staticTxt: string = '';
  @Input() dynamicTxts: string[] = [];

  typewriterIndex: number = 0;
  typewriterDisplay: string = '';

  typingCallback(that: this) {
    let wordLength = that.dynamicTxts[that.typewriterIndex].length;
    let currentWordLength = that.typewriterDisplay.length;

    if (
      that.typewriterIndex === that.dynamicTxts.length - 1 &&
      currentWordLength === wordLength
    ) {
      that.typewriterIndex = 0;
    } else if (currentWordLength === wordLength) {
      that.typewriterIndex++;
    }

    if (currentWordLength < wordLength) {
      that.typewriterDisplay +=
        that.dynamicTxts[that.typewriterIndex][currentWordLength];
      setTimeout(that.typingCallback, 1000, that);
    } else {
      that.typewriterDisplay = '';
      setTimeout(that.typingCallback, 1000, that);
    }
  }

  ngOnInit(): void {
    this.typingCallback(this);
  }
}
