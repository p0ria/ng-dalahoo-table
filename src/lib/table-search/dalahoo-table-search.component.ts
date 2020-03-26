import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'dalahoo-table-search',
  templateUrl: './dalahoo-table-search.component.html',
  styleUrls: ['./dalahoo-table-search.component.scss']
})
export class DalahooTableSearchComponent implements OnInit {
  @Output() searchChanged = new EventEmitter<string>();
  @ViewChild('searchInput', {static: true}) searchInputElRef: ElementRef;
  private searchInputEl: HTMLInputElement;

  constructor() { }

  ngOnInit(): void {
    this.searchInputEl = this.searchInputElRef.nativeElement as HTMLInputElement;
    fromEvent(this.searchInputEl, 'input').pipe(
      debounceTime(500)
    ).subscribe(_ => {
      let searchTerm = this.searchInputEl.value;
      this.searchChanged.emit(searchTerm);
    })
  }

}
