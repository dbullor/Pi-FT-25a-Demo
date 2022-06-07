import React from "react";
import Styles from './styles.module.css';

export default function Pagination({ countriesPerPage, allCountries, pagination }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
      }

      return (
        <div>
          {pageNumbers &&
            pageNumbers.map((number) => {
              return (
                <button key={number} onClick={() => pagination(number)} className={Styles.pagination}>{number}</button>
              );
            })}
        </div>
      );
    }

