import {
  Component,
  ContentChild,
  TemplateRef,
  ChangeDetectionStrategy,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'select-container',
  exportAs: 'selectContainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="(state | async) as selectState">
      <ng-container
        *ngTemplateOutlet="template; context: selectState"
      ></ng-container>
    </ng-container>
  `
})
export class SelectContainerComponent implements AfterViewInit, OnDestroy {
  @ContentChild(TemplateRef, {}) template!: TemplateRef<any>;

  state = new BehaviorSubject({
    isOpen: false,
    selectedItem: {},
    highlightedItem: {}
  });

  selectClick() {
    this.state.next({
      ...this.state.getValue(),
      isOpen: !this.state.getValue().isOpen ? true : false
    });
    console.log('select clicked', this.state.getValue());
  }

  optionClick(item) {
    this.state.next({
      ...this.state.getValue(),
      selectedItem: item
    });
    console.log('option clicked', this.state.getValue());
  }

  optionHover(item) {
    this.state.next({
      ...this.state.getValue(),
      highlightedItem: item
    });
    console.log('option hovered', this.state.getValue());
  }

  ngAfterViewInit() {
    this.state.next({
      isOpen: false,
      selectedItem: { value: '' },
      highlightedItem: { value: '' }
    });
  }

  ngOnDestroy() {}
}
