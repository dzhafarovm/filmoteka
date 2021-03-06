import React from 'react';
import { MemoryRouter, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import Notiflix from 'notiflix';

import { refs } from '../refs';

import FilmsApiService from '../fetchMainCards';
import { addFilmsCardMarkup } from '../renderMainCards';

const filmsApi = new FilmsApiService();

export default function PaginationLink() {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get('page') || '1', 10);

          let value = document.getElementsByTagName('input')[0].value;

          if (value != '') {
            filmsApi.fetchCards(page, value).then(addFilmsCardMarkup);
          } else {
            return;
          }

          //  window.scrollTo(0, 0);

          function dataPages() {
            const totalPages = refs.filmsContainer.getAttribute('dataPage');
            return totalPages;
          }
          let pagesStr = dataPages();

          let pagesNumbar = Number(pagesStr);
          //  console.log(pagesNumbar);

          if (pagesNumbar === 0) {
            Notiflix.Notify.failure(
              'Sorry, there are no films matching your search query. Please try again.',
            );
          }
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
