namespace mg.bookstore;

using {cuid} from '@sap/cds/common';

entity Books : cuid {
    title    : String;
    descr    : String;
    author   : Association to Authors;
    genre    : Association to Genres;
    stock    : Integer;
    price    : Decimal(9, 2);
    currency : String default 'USD';
    orders   : Association to many Orders.items
                   on orders.book = $self;
    rating   : Integer;
}

entity Authors : cuid {
    name           : String(20);
    dateOfBirth    : Date;
    countryOfBirth : String;
    books          : Association to many Books
                         on books.author = $self @assert.integrity : false;
}

entity Orders : cuid {
    deliveryDate    : Date;
    customerName    : String;
    phoneNumber     : String;
    items           : Composition of many {
                          key book   : Association to Books @assert.integrity : false;
                              amount : Integer;
                      };
    customerCity    : String;
    paymentMethod   : String;
    totalCost       : Decimal(9, 2);
    currency        : String default 'USD';
    customerAddress : String;
}

entity Genres {
    key title : String;
        books : Association to many Books
                    on books.genre = $self;
}
