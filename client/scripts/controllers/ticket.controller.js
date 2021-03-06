import moment from 'moment';
import { Controller } from '../entities';

export default class TicketCtrl extends Controller {
  constructor() {
    super(...arguments);

    this.data = [
      {
        _id: 0,
        name: 'Ethan Gonzalez',
        timestamp: moment().subtract(1, 'hours').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      },
      {
        _id: 1,
        name: 'Bryan Wallace',
        timestamp: moment().subtract(2, 'hours').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      },
      {
        _id: 2,
        name: 'Avery Stewart',
        timestamp: moment().subtract(1, 'days').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      },
      {
        _id: 3,
        name: 'Katie Peterson',
        timestamp: moment().subtract(4, 'days').toDate(),
        where: 'ทองหล่อ, กรุงเทพ'
      }
    ];

    // remove(tkz) {
    //   this.data.splice(this.data.indexOf(tkz), 1);
    // }
  }
}

TicketCtrl.$inject = ['$scope'];
