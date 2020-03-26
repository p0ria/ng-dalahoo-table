import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DalahooTableComponent} from "./dalahoo-table.component";
import {HighlightMatchDirective} from "./directives/highlight-match.directive";
import {ClickOutsideDirective} from "./directives/click-outside.directive";
import {DalahooTableBodyComponent} from "./table-body/dalahoo-table-body.component";
import {DalahooTableHeaderComponent} from "./table-header/dalahoo-table-header.component";
import {DalahooTableHeaderCellComponent} from "./table-header/table-header-cell/dalahoo-table-header-cell.component";
import {DalahooTableHeaderCellFilterComponent} from "./table-header/table-header-cell/table-header-cell-filter/dalahoo-table-header-cell-filter.component";
import {DalahooTableRowComponent} from "./table-row/dalahoo-table-row.component";
import {DalahooTableRowCellComponent} from "./table-row/table-row-cell/dalahoo-table-row-cell.component";
import {DalahooTableSearchComponent} from "./table-search/dalahoo-table-search.component";

const COMPONENTS = [
  DalahooTableComponent,
  DalahooTableBodyComponent,
  DalahooTableHeaderComponent,
  DalahooTableHeaderCellComponent,
  DalahooTableHeaderCellFilterComponent,
  DalahooTableRowComponent,
  DalahooTableRowCellComponent,
  DalahooTableSearchComponent
];

const DIRECTIVES = [
  HighlightMatchDirective,
  ClickOutsideDirective
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class DalahooTableModule { }
