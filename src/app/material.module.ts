import { NgModule } from '@angular/core';

import {
  MdCardModule,
  MdTabsModule,
  MdToolbarModule,
  MdTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MdCardModule,
    MdToolbarModule,
    MdTableModule,
    MdTabsModule
  ],
  exports: [
    MdCardModule,
    MdToolbarModule,
    MdTableModule,
    MdTabsModule
  ]
})
export class MaterialModule {}
