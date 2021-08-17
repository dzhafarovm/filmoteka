import React from 'react';
import ReactDOM from 'react-dom';
import PaginPopal from './paginationPopul';

export function pagination() {
  ReactDOM.render(<PaginPopal />, document.querySelector('#root_header'));
  ReactDOM.render(<PaginPopal />, document.querySelector('#root_futer'));
}
