import {
  AfterContentInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {Subscription} from "rxjs";
import {DalahooTableHeaderCellFilterComponent} from "./table-header-cell-filter/dalahoo-table-header-cell-filter.component";

@Component({
  selector: 'dalahoo-table-header-cell',
  templateUrl: './dalahoo-table-header-cell.component.html',
  styleUrls: ['./dalahoo-table-header-cell.component.scss']
})
export class DalahooTableHeaderCellComponent implements OnInit, OnDestroy, AfterContentInit {
  @Input() field: string;
  @Input() @HostBinding('style.flex') flex: string = '1';
  @Input() @HostBinding('class.center') isCenter: boolean = false;
  @ContentChild(DalahooTableHeaderCellFilterComponent, {static: true}) filterComponent: DalahooTableHeaderCellFilterComponent;

  @HostBinding('class.filter-active')
  isFiltered: boolean = false;
  filterChangedSub: Subscription;
  @HostBinding('class.filter')
  isFilterable: boolean = false;
  @HostBinding('class.filter-open')
  isFilterOpen: boolean = false;

  constructor(){}

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    if(this.filterComponent) {
      this.isFilterable = true;
      this.filterChangedSub = this.filterComponent.filter.filterChanged.subscribe(
        event => this.isFiltered = event);
    }
  }

  ngOnDestroy(): void {
    if(this.filterChangedSub) this.filterChangedSub.unsubscribe();
  }

  toggleFilterOpen(event: MouseEvent) {
    event.stopPropagation();
    this.isFilterOpen = !this.isFilterOpen;
  }
}
