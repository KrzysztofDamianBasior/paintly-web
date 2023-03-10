import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss'],
})
export class LinkButtonComponent implements OnInit {
  @Input() onClick: () => void = () => {};

  constructor() {}

  ngOnInit(): void {}
}
