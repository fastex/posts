import { createReducer, on } from '@ngrx/store';

import { filterChanged } from './posts.actions';

export const initialFilterState = '';

export const filterReducer = createReducer(
  initialFilterState,
  on(filterChanged, (state, { filterValue }) => filterValue)
);
