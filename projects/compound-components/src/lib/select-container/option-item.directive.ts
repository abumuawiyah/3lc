import {
  Directive,
  HostBinding,
  ElementRef,
  Input,
  Inject,
  forwardRef,
  OnInit,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectContainerComponent } from './select-container.component';

@Directive({
  selector: '[option-item]',
  exportAs: 'optionItem'
})
export class OptionItemDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() item: Object = {};
  @HostBinding('class') className = '';
  private destroy = new Subject<void>();

  constructor(
    private element: ElementRef,
    @Inject(forwardRef(() => SelectContainerComponent))
    private selectContainer: SelectContainerComponent
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.element.nativeElement, 'click')
      .pipe(takeUntil(this.destroy))
      .subscribe(_ => this.selectContainer.optionClick(this.item));

    fromEvent(this.element.nativeElement, 'mouseover')
      .pipe(takeUntil(this.destroy))
      .subscribe(_ => this.selectContainer.optionHover(this.item));

    fromEvent(this.element.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.destroy))
      .subscribe(_ => this.selectContainer.optionRemoveHover());
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
