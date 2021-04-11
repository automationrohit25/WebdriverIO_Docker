import Page from "../pageobjects/page";

class MildHybridPage extends Page{

    get mildHybridCars(){
        return $('a[data-autoid="ProductListCarousel:cta2"]');
    }

    get headings(){
        return $('h2.a span');
    }
}

export default new MildHybridPage();