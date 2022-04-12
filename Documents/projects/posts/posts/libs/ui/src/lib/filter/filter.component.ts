import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'posts-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements AfterViewInit, OnInit {
  @Input() filterValue: string | undefined | null;
  @Output() filterChanged = new EventEmitter<string>();

  filter = new FormControl('');

  ngOnInit() {
    this.filter.setValue(this.filterValue);
  }

  onClearFilter() {
    this.filter.setValue('');
  }

  ngAfterViewInit() {
    this.filter.valueChanges.subscribe((value) =>
      this.filterChanged.emit(value)
    );
  }
}
