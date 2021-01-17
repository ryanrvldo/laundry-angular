import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Item } from '../model/item';
import { ItemDetails } from '../model/item-details';
import { LaundryTransaction } from '../model/laundry-transaction';
import { Role } from '../model/role';
import { Services } from '../model/services';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUsers(): User[] {
    return [
      {
        id: 2,
        username: 'admin',
        profile: {
          id: 4,
          fullName: 'James Bon Jovi',
          phone: '3467486759',
          email: 'bobon@yahoo.com',
          address: 'Jakarta',
        },
        role: {
          id: 1,
          code: 'ADM',
          name: 'Administrator',
        },
        isActive: true,
      },
      {
        id: 3,
        username: 'cashier',
        profile: {
          id: 5,
          fullName: 'Roy Mas',
          phone: '0812731268',
          email: 'romas@yahoo.com',
          address: 'Jakarta',
        },
        role: {
          id: 2,
          code: 'CSHR',
          name: 'Cashier',
        },
        isActive: true,
      },
    ];
  }

  getRoles(): Role[] {
    return [
      {
        id: 1,
        code: 'ADM',
        name: 'Administrator',
      },
      {
        id: 2,
        code: 'CSHR',
        name: 'Cashier',
      },
    ];
  }

  getItemList(): Item[] {
    return [
      {
        id: 3,
        itemDetails: {
          id: 2,
          code: 'tst',
          name: 'T-Shirt',
        },
        services: {
          id: 8,
          code: 'kl-reg1',
          name: 'Kilos Regular 1 Day',
          hourDuration: 24,
        },
        cost: 0.0,
      },
      {
        id: 2,
        itemDetails: {
          id: 2,
          code: 'tst',
          name: 'T-Shirt',
        },
        services: {
          id: 3,
          code: 'ul-reg1',
          name: 'Unit Regular 1 Day',
          hourDuration: 24,
        },
        cost: 8000.0,
      },
      {
        id: 6,
        itemDetails: {
          id: 4,
          code: 'SWT',
          name: 'Sweater',
        },
        services: {
          id: 5,
          code: 'ul-exp1',
          name: 'Unit Express 3 Hours',
          hourDuration: 3,
        },
        cost: 6000.0,
      },
    ];
  }

  getItemDetailsList(): ItemDetails[] {
    return [
      {
        id: 2,
        code: 'tst',
        name: 'T-Shirt',
      },
      {
        id: 3,
        code: 'ST',
        name: 'Shirt',
      },
      {
        id: 4,
        code: 'SWT',
        name: 'Sweater',
      },
    ];
  }

  getServiceList(): Services[] {
    return [
      {
        id: 1,
        code: 'ul-exp2',
        name: 'Unit Express 6 Hours',
        hourDuration: 6,
      },
      {
        id: 3,
        code: 'ul-reg1',
        name: 'Unit Regular 1 Day',
        hourDuration: 24,
      },
      {
        id: 5,
        code: 'ul-exp1',
        name: 'Unit Express 3 Hours',
        hourDuration: 3,
      },
      {
        id: 8,
        code: 'kl-reg1',
        name: 'Kilos Regular 1 Day',
        hourDuration: 24,
      },
      {
        id: 9,
        code: 'kl-reg2',
        name: 'Kilos Regular 2 Days',
        hourDuration: 48,
      },
    ];
  }

  getCustomerList(): Customer[] {
    return [
      {
        id: 6,
        profile: {
          id: 13,
          fullName: 'Jaja Miharja',
          phone: '0812381123',
          email: 'jaja@gmail.com',
          address: 'Jakarta',
        },
      },
      {
        id: 7,
        profile: {
          id: 14,
          fullName: 'Apri Wakwaw',
          phone: '0812382331',
          email: 'bakwan@gmail.com',
          address: 'Bandung',
        },
      },
    ];
  }

  getTransactionList(): LaundryTransaction[] {
    return [
      {
        receiptNumber: 'TRX1609128982576',
        customer: {
          id: 14,
          fullName: 'Apri Wakwaw',
          phone: '0812382331',
          email: 'bakwan@gmail.com',
          address: 'Bandung',
        },
        startDate: '2020-12-28 11:16:22',
        items: [
          {
            id: 2,
            itemDetails: {
              id: 2,
              code: 'tst',
              name: 'T-Shirt',
            },
            services: {
              id: 3,
              code: 'ul-reg1',
              name: 'Unit Regular 1 Day',
              hourDuration: 24,
            },
            cost: 8000.0,
            quantity: 4,
            finishDate: '2020-12-29 11:16:22',
          },
          {
            id: 6,
            itemDetails: {
              id: 4,
              code: 'SWT',
              name: 'Sweater',
            },
            services: {
              id: 5,
              code: 'ul-exp1',
              name: 'Unit Express 3 Hours',
              hourDuration: 3,
            },
            cost: 6000.0,
            quantity: 4,
            finishDate: '2020-12-28 14:16:22',
          },
        ],
        totalCost: 56000,
        user: {
          id: 3,
          username: 'cashier',
          isActive: true,
          profile: null,
          role: null,
        },
      },
    ];
  }
}
