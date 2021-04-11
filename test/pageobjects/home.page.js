import Page from '../pageobjects/page';

class HomePage extends Page{
 

    get cookieAccept(){
        return $('button[title="Accept"]');
    }

    get carLink(){
        return $('button[id="nav:topNavCarMenu"]');
    }

    get cars_electric(){
        return $('#site-nav-cars-menu-section-tab-0 h2');
    }

    get cars_hybrid(){
        return $('#site-nav-cars-menu-section-tab-1 h2');
    }

    get cars_mild(){
        return $('#site-nav-cars-menu-section-tab-2 h2');
    }

    get close(){
        return $('button[data-autoid="nav:carMenuCloseButton"] span');
    }

    open(){
        super.open("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    }
   
}

export default new HomePage();
