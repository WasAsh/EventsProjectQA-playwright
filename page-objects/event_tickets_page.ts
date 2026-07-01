import {Page , Locator} from '@playwright/test';


export class EventTicketsPage{

    page : Page ;
    bookingBTN : Locator;
    bookingCards : Locator;
    refInViewDetails : Locator;
    errorMsgs : Locator;

    constructor(page: Page){

        this.page = page;
        this.bookingBTN = page.locator('#nav-bookings');
        this.bookingCards = page.locator('#booking-card');
        this.refInViewDetails = page.locator('.mb-6 .text-gray-900');
        this.errorMsgs = page.locator('.flex .text-red-600');

    }

    async goToBookingAndViewTicket(refference_ID: string){
        await this.bookingBTN.click();
        const exactCard = this.bookingCards.filter({hasText: refference_ID});
        await exactCard.getByRole('button' , {name: 'View Details'}).click();
        await this.page.waitForLoadState('networkidle');
    }
}