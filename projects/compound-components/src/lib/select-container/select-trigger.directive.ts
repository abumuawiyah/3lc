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
  selector: '[select-trigger]',
  exportAs: 'selectTrigger'
})
export class SelectTriggerDirective
  implements OnInit, AfterViewInit, OnDestroy {
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
      .subscribe(_ => this.selectContainer.selectClick());
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}
