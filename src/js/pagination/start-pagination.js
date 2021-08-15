import React from 'react';
import ReactDOM from 'react-dom';
import PaginPopal from './paginationPopul';
import Paginlib from './paginationLib';
// console.log(Demo);

// pagination();
export function pagination() {
  //   ReactDOM.render(<Demo />, document.querySelector('#root_header'));
  ReactDOM.render(<PaginPopal />, document.querySelector('#root'));
}

// paginationLib();
export function paginationLib() {
  //   ReactDOM.render(<Demo />, document.querySelector('#root_header'));
  ReactDOM.render(<Paginlib />, document.querySelector('#root'));
}
