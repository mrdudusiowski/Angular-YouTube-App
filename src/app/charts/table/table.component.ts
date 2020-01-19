import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren, OnInit } from '@angular/core';

interface YouTubers {
  id: number;
  name: string;
  subs: number;
  views: number;
  country: string;
}

const YOUTUBERS: YouTubers[] = [
  {
    id: 1,
    name: 'PewDiePie',
    subs: 110000000,
    views: 17075200,
    country: 'us'
  },
  {
    id: 2,
    name: 'KubsScouts',
    subs: 354000,
    views: 7075200,
    country: 'us'
  },
  {
    id: 3,
    name: 'TVNTurbo',
    subs: 3330000,
    views: 75200,
    country: 'pl'
  },
  {
    id: 4,
    name: 'Mr DuDuSiowski',
    subs: 2350,
    views: 15200,
    country: 'pl'
  },
];

export type SortDirection = 'asc' | 'desc' | '';
const rotate: {[key: string]: SortDirection} = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({column: this.sortable, direction: this.direction});
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  youtubers = YOUTUBERS;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '') {
      this.youtubers = YOUTUBERS;
    } else {
      this.youtubers = [...YOUTUBERS].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
