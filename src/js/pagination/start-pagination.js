import React from 'react';
import ReactDOM from 'react-dom';
import PaginPopal from './paginationPopul';

import { refs } from '../refs.js';

export function pagination() {
  //   ReactDOM.render(<PaginPopal />, document.querySelector('#root_header'));
  ReactDOM.render(<PaginPopal />, document.querySelector('#root_futer'));
}

copyMarkupPagin();

function copyMarkupPagin() {
  console.log(refs.pagination);
}
