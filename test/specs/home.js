import HomePage from '../pageobjects/home.page';

describe('Volvo Home Page', () =>{
    it('Verify Title of Volvo Home Page', ()=>{
         HomePage.open();
         HomePage.cookieAccept.click();
         browser.pause(5000);

         expect(browser).toHaveTitle(
            'A million more | Volvo Cars'
         );
    });

    it('Verify User is able to click on Cars Link and verify types of cars', ()=>{
         HomePage.carLink.click();
         browser.pause(5000);
         console.log('car link is clicked')

         expect(HomePage.cars_electric).toHaveText('Electric')

         expect(HomePage.cars_hybrid).toHaveText('Hybrids');
         
         expect(HomePage.cars_mild).toHaveText('Mild hybrids');

         HomePage.close.click();
         
         console.log('closed successfully');
    })
});