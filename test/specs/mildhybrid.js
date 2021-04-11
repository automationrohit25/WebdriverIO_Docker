import HomePage from '../pageobjects/home.page';
import MildHybridPage from '../pageobjects/mildhybrid.page';
import allureReporter from '@wdio/allure-reporter';

describe('scroll down Page to Mild Hybrid Cars', ()=>{
    it('Click on Mild Hybrid Cars and redirect to New Page', ()=>{

        HomePage.open();
        HomePage.cookieAccept.click();
        browser.pause(3000);
        // const mildHybridCars = $('a[data-autoid="ProductListCarousel:cta2"]');
        MildHybridPage.mildHybridCars.scrollIntoView();
        browser.pause(3000);
        MildHybridPage.mildHybridCars.click();
        expect(browser).toHaveTitle(
            'Mild hybrids and other powertrains | Volvo Cars'
         );

    });

    it('should verify headings on mild hybrid cars page', ()=>{
        expect(MildHybridPage.headings).toBeDisplayed();
        expect(MildHybridPage.headings).toHaveTextContaining('Designed to move you.');
    });

    
})