import React from 'react';
import ReactDOM from 'react-dom';
import PaginPopal from './paginationPopul';
import PaginInput from './paginationInput';

pagination();
export function pagination() {
  ReactDOM.render(<PaginPopal />, document.querySelector('#root_futer'));
  const linkRootInput = document.querySelector('#root_futer-input');
  linkRootInput.classList.add('js-active');
  const linkRootPopul = document.querySelector('#root_futer');
  linkRootPopul.classList.remove('js-active');
}

export function pagiInp() {
  ReactDOM.render(<PaginInput />, document.querySelector('#root_futer-input'));
  const linkRootPopul = document.querySelector('#root_futer');
  linkRootPopul.classList.add('js-active');
  const linkRootInput = document.querySelector('#root_futer-input');
  linkRootInput.classList.remove('js-active');
}
