import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import { refs } from '../refs';
import { fetchPopularCollection } from '../fetch-popular.js';
import { renderPopularCollection } from '../page-popular.js';

// const totalPages = 1000;

export default function PaginationLink() {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);

          fetchPopularCollection(page).then(renderPopularCollection);

          function dataPages() {
            const totalPages = refs.filmsContainer.getAttribute('dataPage');
            // console.log(totalPages);
            return totalPages;
          }
          let pagesStr = dataPages();
          //  console.log(typeof pagesStr);

          let pagesNumbar = Number(pagesStr);
          //  console.log(typeof pagesNumbar);

          return (
            <Pagination
              page={page}
              count={pagesNumbar}
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
