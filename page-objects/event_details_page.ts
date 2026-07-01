import { Page, Locator } from '@playwright/test';

export class EventDetailsPage {

    page: Page;
    eventsCardsHeads: Locator;
    eventTitleDetails: Locator;
    bookNowBTN: Locator;
    fullNameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    confirmationLabel: Locator;
    bookingRef: Locator;

    constructor(page: Page) {

        this.page = page;
        this.eventsCardsHeads = page.locator('main article h3');
        this.eventTitleDetails = page.locator('h1');
        this.bookNowBTN = page.getByRole('button', { name: 'Confirm Booking' });
        this.fullNameField = page.locator('#customerName');
        this.emailField = page.locator('#customer-email');
        this.phoneField = page.locator('#phone');
        this.confirmationLabel = page.getByText('Booking Confirmed! 🎉');
        this.bookingRef = page.locator('.booking-ref');

    }

    async goToEventDetails(eventTitle: string) {
        const targetLink = this.eventsCardsHeads.filter({ hasText: eventTitle });
        await targetLink.click();
    }

    async bookTicket(user_full_name: string, user_email: string, user_phone: string) {
        await this.fullNameField.fill(user_full_name);
        await this.emailField.fill(user_email);
        await this.phoneField.fill(user_phone);
        await this.bookNowBTN.click();
        await this.page.waitForLoadState('networkidle');
    }

    async getBookingReference(): Promise<string> {
        return await this.bookingRef.innerText();
    }

    async hasBookingReference(): Promise<boolean> {
        return await this.bookingRef.isVisible();
    }

}