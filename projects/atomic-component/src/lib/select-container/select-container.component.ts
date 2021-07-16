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
  selector: 'Breadcrumbs',
  exportAs: 'Breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="(state | async) as breadcrumbState">
      <ng-container
        *ngTemplateOutlet="template; context: breadcrumbState"
      ></ng-container>
    </ng-container>
  `
})
export class SelectContainerComponent implements AfterViewInit, OnDestroy {
  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any>;

  state = new BehaviorSubject({ selectedItem: {}, highlightedItem: {} });

  itemClick(item) {
    console.log(item);
    this.state.next({
      selectedItem: item,
      highlightedItem: this.state.getValue().highlightedItem
    });
  }

  itemHover(item) {
    this.state.next({
      highlightedItem: item,
      selectedItem: this.state.getValue().selectedItem
    });
  }

  ngAfterViewInit() {
    this.state.next({
      selectedItem: { value: '' },
      highlightedItem: { value: '' }
    });
  }

  ngOnDestroy() {}
}
