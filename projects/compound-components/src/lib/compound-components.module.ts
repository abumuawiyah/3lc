import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectContainerComponent } from './select-container/select-container.component';
import { OptionItemDirective } from './select-container/option-item.directive';
import { SelectTriggerDirective } from './select-container/select-trigger.directive';

@NgModule({
  declarations: [
    SelectContainerComponent,
    OptionItemDirective,
    SelectTriggerDirective
  ],
  imports: [CommonModule],
  exports: [
    SelectContainerComponent,
    OptionItemDirective,
    SelectTriggerDirective
  ]
})
export class CompoundComponentsModule {}
