import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { refs } from '../refs';
import { fetchPopularCollection } from '../fetch-popular.js';
import { renderPopularCollection } from '../page-popular.js';
import { dataCollection } from '../page-popular.js';

// let totalPages = '';
// console.log(totalPages);

// export function dataPages() {
//   const totalPages = refs.filmsContainer.getAttribute('dataPage');
//   console.log(totalPages);
//   return totalPages;
// }
// console.log(totalPages);

const aaa = 400;

export default function PaginationLink() {
  //   const fff = setTimeout(dataPages(), 5000);
  //   console.log(fff);
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);
          //  const totalPages = function () {
          //    const Pages = refs.filmsContainer.getAttribute('dataPage');
          //    console.log(Pages);
          //    return totalPages;
          //  };
          //  console.log(totalPages);
          //  dataCollection(page);

          fetchPopularCollection(page).then(renderPopularCollection);

          //  function ddd() {
          //    const totalPages = refs.filmsContainer.getAttribute('dataPage');
          //    console.log(totalPages);
          //    return totalPages;
          //  }
          //  let dsdd = ddd();
          //  console.log(dsdd);

          return (
            <Pagination
              page={page}
              count={aaa}
              defaultPage={6}
              siblingCount={2}
              boundaryCount={1}
              showFirstButton
              showLastButton
              color="primary"
              shape="rounded"
              renderItem={item => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}
