/*global Flickity */
import { select, templates } from '../settings.js';
import app from '../app.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
    thisHome.goToPage();
    //thisHome.initPagesNav();
    //thisHome.navigation();
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
    thisHome.dom.order = thisHome.dom.wrapper.querySelector(select.home.order);
    thisHome.dom.book = thisHome.dom.wrapper.querySelector(select.home.book);
  }

  initWidgets() {
    const thisHome = this;

    thisHome.element = document.querySelector(select.widgets.carousel);
    thisHome.flkty = new Flickity(thisHome.element, {
      cellAlign: 'left',
      contain: true,
      autoPlay: 3000,
      wrapAround: true,
      prevNextButtons: false,
    });
  }

  goToPage() {
    const thisHome = this;
    
    thisHome.dom.order.addEventListener('click', function(){
      app.activatePage('order');
    });
   
    thisHome.dom.book.addEventListener('click', function(){
      app.activatePage('booking');
    });

  }
  /*
  navigation(){
    const thisHome = this;
    
    thisHome.dom.order.addEventListener('click', function(){
      thisHome.activatePage('order');
    });
    thisHome.dom.book.addEventListener('click', function(){
      thisHome.activatePage('booking');
    });
  }
  initPagesNav() {
    const thisHome = this;
    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.home.options);
    const idFromHash = window.location.hash.replace('#/', '');
    let pageMatchingHash = thisHome.pages[0].id;
    for (let page of thisHome.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisHome.activatePage(pageMatchingHash);
    for (let link of thisHome.navLinks) {
      link.addEventListener('click', function (event) {
        //console.log(this);
        const clickedElement = this;
        event.preventDefault();
       
        const id = clickedElement.getAttribute('href').replace('#', '');
      
        thisHome.activatePage(id);
        
        window.location.hash = '#/' + id;
      });
    }
  }
 
  activatePage(pageId) {
    const thisHome = this;
    for (let page of thisHome.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
  
    for (let link of thisHome.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  }*/

}
export default Home;