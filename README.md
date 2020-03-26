#Dalahoo Table

A simple and powerful Datatable for Angular based on [Dalahoo Website](https://dalahoo.com/) Table with some additional features.

![Preview video][]

## Key features

- Custom header cell template
- Custom row cell template
- Builtin sorting and searching
- Custom column filtering

## Prerequisites

- Angular version 5 or higher
- FontAwesome

## Installation

1. Install ng-dalahoo-table with `npm`:
    `npm install ng-dalahoo-table --save`
2. Add `DalahooTableModule` to `imports` in `src/app/app.module.ts`:
    ```typescript
    @NgModule({
      imports: [
        BrowserModule,
        DalahooTableModule
      ],
      declarations: [AppComponent],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```
3. Add FontAwesome:
    * Install fontawesome via npm:
      `npm install fontawesome --save`
    * Add `fontawesome scss` file to `styles` section in `package.json` file:
      ```
        "styles": [
          "../node_modules/font-awesome/scss/font-awesome.scss"
        ]
      ```
    * Add these two lines to `styles.scss` file:
      ```
        $fa-font-path: "../../../node_modules/font-awesome/fonts";
        @import '~font-awesome/scss/font-awesome.scss';
      ```
      
## Example
  
```html
<dalahoo-table [items]="items" #table>
  <dalahoo-table-header>
    <dalahoo-table-header-cell field="group" flex="1">
      گروه
    </dalahoo-table-header-cell>
    <dalahoo-table-header-cell field="title" flex="1">
      عنوان
    </dalahoo-table-header-cell>
    <dalahoo-table-header-cell field="capacity" flex="0 0 100px" [isCenter]="true">
      ظرفیت
    </dalahoo-table-header-cell>
    <dalahoo-table-header-cell field="duration" flex="0 0 100px" [isCenter]="true">
      مدت
    </dalahoo-table-header-cell>
    <dalahoo-table-header-cell field="date" flex="0 0 120px" [isCenter]="true">
      تاریخ
    </dalahoo-table-header-cell>
  </dalahoo-table-header>
  <dalahoo-table-body>
    <dalahoo-table-row *ngFor="let item of table.displayItems">
      <dalahoo-table-row-cell >
        <span [highlightMatch]="item.group"></span>
      </dalahoo-table-row-cell>
      <dalahoo-table-row-cell >
        <span [highlightMatch]="item.title"></span>
      </dalahoo-table-row-cell>
      <dalahoo-table-row-cell >
        <span>{{item.capacity}}</span>
      </dalahoo-table-row-cell>
      <dalahoo-table-row-cell>
        <span [highlightMatch]="item.duration"></span>
      </dalahoo-table-row-cell>
      <dalahoo-table-row-cell>
        <span [highlightMatch]="item.date"></span>
      </dalahoo-table-row-cell>
    </dalahoo-table-row>
  </dalahoo-table-body>
</dalahoo-table>
```

## Filter functionality

* Create a component that implements Filterable<T> interface
* Add this component inside `<dalahoo-table-header-cell>` tag wrapped inside `<dalahoo-table-header-cell-filter>` tag

```typescript
@Component({
  selector: 'app-capacity-filter',
  templateUrl: './capacity-filter.component.html',
  styleUrls: ['./capacity-filter.component.scss']
})
export class CapacityFilterComponent implements Filterable<Item>, OnInit {
  @Output() filterChanged = new BehaviorSubject<boolean>(false);

  isAvailableChecked = true;
  isUnAvailableChecked = false;

  ngOnInit(): void {
    this.trigger();
  }

  trigger() {
    let isFiltered = !this.isAvailableChecked || !this.isUnAvailableChecked;
    this.filterChanged.next(isFiltered);
  }

  filter = (item: Item): boolean => {
    if(this.isAvailableChecked && this.isUnAvailableChecked) return true;
    if(this.isAvailableChecked) if(item.capacity == 'موجود') return true;
    if(this.isUnAvailableChecked) if(item.capacity == 'ناموجود') return true;
    return false;
  };

  availableCheckChanged(checked: boolean) {
    this.isAvailableChecked = checked;
    this.trigger();
  }

  unAvailableCheckChanged(checked: boolean) {
    this.isUnAvailableChecked = checked;
    this.trigger();
  }
}
```

```html
<dalahoo-table-header-cell field="capacity" flex="0 0 100px" [isCenter]="true">
    ظرفیت
    <dalahoo-table-header-cell-filter width="150px" height="70px" [filter]="capacityFilter">
      <app-capacity-filter #capacityFilter></app-capacity-filter>
    </dalahoo-table-header-cell-filter>
</dalahoo-table-header-cell>
```

[Preview video]: https://public-media.driftvideo.com/videos-gifs/HYFY-RECORDING-1139828-1181483-1585222869-.gif


