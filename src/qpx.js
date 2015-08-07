import defaults from 'lodash/object/defaults';
import defaultsDeep from 'lodash/object/defaultsDeep';
import clone from 'lodash/lang/clone';
import keyMirror from 'keymirror';
import fetch from 'isomorphic-fetch';

import passengers from './request/passengers';
import fare from './request/fare';
import country from './request/country';
import price from './request/price';
import refundable from './request/refundable';
import {polyfill} from 'es6-promise';

polyfill();

const URL = 'https://www.googleapis.com/qpxExpress/v1/trips/search';

export default function(key) {
  const appKey = key;
  const fields = {
    passengers: passengers(),
    fare: fare(),
    country: country(),
    price: price(),
    refundable: refundable()
  };

  return {
    fields,
    search: (customRequest ={}, customOptions = {}) => {
      const url = `${URL}?key=${appKey}`;
      const request = _generateRequest(customRequest, fields);
      return _search(url, request, customOptions);
    }
  }
}

function _search(url, request, customOptions) {
  return fetch(url, defaults(customOptions, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({request: request})
    }))
    .then(res => {
      return res.json();
    });
}

function _generateRequest(customRequest, qpx) {
  return defaults(customRequest, {
    passengers: qpx.passengers.getPassengers(),
    slice: [
      qpx.fare.getFare()
    ],
    maxPrice: qpx.price.getPrice(),
    saleCountry: qpx.country.getCountry(),
    refundable: qpx.refundable.getRefundable(),
    solutions: 100
  });
}