import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontalModule } from 'frontal';
import { SelectContainerComponent } from './select-container/select-container.component';
import { MyOptionComponent } from './select-container/option.component';
import { MySelectComponent } from './select-container/select.component';

@NgModule({
  declarations: [
    SelectContainerComponent,
    MyOptionComponent,
    MySelectComponent
  ],
  imports: [CommonModule, FrontalModule],
  exports: [SelectContainerComponent, MyOptionComponent, MySelectComponent]
})
export class AtomicComponentModule {}
