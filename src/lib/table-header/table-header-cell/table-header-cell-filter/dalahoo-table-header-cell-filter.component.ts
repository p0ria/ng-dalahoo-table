import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Inject, Input,
  OnInit,
} from '@angular/core';

import {Filterable} from "../../../interfaces/filterable.interface";
import {DalahooTableHeaderCellComponent} from "../dalahoo-table-header-cell.component";


@Component({
  selector: 'dalahoo-table-header-cell-filter',
  templateUrl: './dalahoo-table-header-cell-filter.component.html',
  styleUrls: ['./dalahoo-table-header-cell-filter.component.scss']
})
export class DalahooTableHeaderCellFilterComponent implements OnInit, AfterViewInit {
  @Input() @HostBinding('style.width') width = '100%';
  @Input() @HostBinding('style.height') height = '100%';
  @Input() filter: Filterable<any>;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    @Inject(forwardRef(() => DalahooTableHeaderCellComponent)) private parent: DalahooTableHeaderCellComponent) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let el = this.elementRef.nativeElement;
    let table = document.querySelector<HTMLElement>('dalahoo-table');
    let parent = el.parentElement;
    if(this.parent.isCenter) {
      let elWidth = el.clientWidth;
      let parentWidth = parent.clientWidth;
      let offset = Math.floor((parentWidth - elWidth) / 2);
      el.style.right = offset + 'px';
    }
    else {
      el.style.right = "0";
    }
    let elLeft = el.getBoundingClientRect().left;
    let tableLeft = table.getBoundingClientRect().left;
    let tableOffset = elLeft - tableLeft;
    if(tableOffset < 0) {
      let right = parseInt(el.style.right.split('px')[0]);
      el.style.right = right + tableOffset + 'px';
    }

  }

  @HostListener('click', ['$event'])
  click(event: MouseEvent) {
    event.stopPropagation();
  }

}
