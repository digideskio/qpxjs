# qpxjs
Javascript library for google's qpx express api.

WIP!!! Not yet usable, api will change!.

current working example:

```
const API_KEY = 'your key';
const q = qpx(API_KEY);
q.fields.passengers.adults(1);
q.fields.fare
  .from("LHR").to("CDG").on("2015-08-08")
  .after('18:00').before('23:59');
q.fields.price.amount(200);
q.fields.country.set('GB');
q.search();
```