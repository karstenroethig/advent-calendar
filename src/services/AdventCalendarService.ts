export default class AdventCalendarService {

  static addOpenedDoor = (year: number, month: number, day: number) => {
    window.localStorage.setItem('opened-door-' + year + '-' + month + '-' + day, 'yes');
  };

  static doorAlreadyOpened = (year: number, month: number, day: number) : boolean => {
    const doorAlreadyOpened = window.localStorage.getItem('opened-door-' + year + '-' + month + '-' + day);
    return doorAlreadyOpened === 'yes';
  };
}