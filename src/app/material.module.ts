/**
 * Import here all the material modules
 *
 * Documentation at:
 * https://material.angular.io
 *
 */
import {
    MdDialogModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdSelectModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdChipsModule,
    MdGridListModule,
    MdSlideToggleModule,
    MdTooltipModule,
  } from '@angular/material';
  import { NgModule } from "@angular/core";
  import {CommonModule} from "@angular/common";
  
  @NgModule({
    imports: [
      MdDialogModule,
      MdButtonModule,
      MdCheckboxModule,
      MdInputModule,
      MdCardModule,
      MdSelectModule,
      MdToolbarModule,
      MdMenuModule,
      MdIconModule,
      MdListModule,
      MdChipsModule,
      MdGridListModule,
      MdSlideToggleModule,
      MdTooltipModule,
      CommonModule
    ],
    exports: [
      CommonModule,
      MdDialogModule,
      MdButtonModule,
      MdCheckboxModule,
      MdGridListModule,
      MdInputModule,
      MdCardModule,
      MdSelectModule,
      MdToolbarModule,
      MdMenuModule,
      MdIconModule,
      MdListModule,
      MdChipsModule,
      MdSlideToggleModule,
      MdTooltipModule,
    ],
  })
  export class MaterialModule { }
  