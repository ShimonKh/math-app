import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[decimalNumber]',
})
export class DecimaNumberDirective {
  @Input() maxInputNumberFieldLength: number = 0;

  private specialKeys: Array<string> = [
    'Backspace',
    'ArrowLeft',
    'ArrowRight',
    'Del',
    'Delete',
    'Tab'
  ];

  constructor(private el: ElementRef) {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const eventKey = event.key;
    if (this.specialKeys.indexOf(eventKey) !== -1) {
      return;
    }
    // const regex = new RegExp(/^\d+$/);
    // include negative number
    const regex = new RegExp(/^-?\d*(\.\d+)?$/);
    const previousValue: string = this.el.nativeElement.value;
    const currentVal: string = [
      previousValue,
      eventKey,
    ].join('');
    if (currentVal && !String(currentVal).match(regex)) {
      event.preventDefault();
      return;
    }
  }
}
