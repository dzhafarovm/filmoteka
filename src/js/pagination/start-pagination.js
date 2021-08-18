import React from 'react';
import ReactDOM from 'react-dom';
import PaginPopal from './paginationPopul';
import PaginInput from './paginationInput';

export function pagination() {
  ReactDOM.render(<PaginPopal />, document.querySelector('#root_futer'));
}

export function pagiInp() {
  ReactDOM.render(<PaginInput />, document.querySelector('#root_futer-input'));
  const linkRootPopul = document.querySelector('#root_futer');
  linkRootPopul.classList.add('js-active');
}
