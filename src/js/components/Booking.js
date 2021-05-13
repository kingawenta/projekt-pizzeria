import {select, templates} from '../settings.js';
import utils from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(container){
    const thisBooking = this;
    
    thisBooking.render(container);
    thisBooking.initWidgets();

  }
  render(bookingContainer){
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget();
    thisBooking.dom = {};
    thisBooking.dom.wrapper = utils.createDOMFromHTML(generatedHTML);
    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);


    bookingContainer.appendChild(thisBooking.dom.wrapper);
  }
  initWidgets(){
    const thisBooking = this;
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

    thisBooking.dom.wrapper.addEventListener('updated', function(){
      thisBooking.updateDOM();
    });
  }
}
export default Booking;