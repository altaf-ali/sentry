import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdCardModule,
  MdTabsModule,
  MdToolbarModule,
  MdTableModule
} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdTableModule,
    MdTabsModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdTableModule,
    MdTabsModule
  ]
})
export class MaterialModule {}
