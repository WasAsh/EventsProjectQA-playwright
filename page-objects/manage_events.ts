import { Page, Locator } from '@playwright/test';


export class ManageEvents {

    page : Page;
    adminBTN : Locator;
    manageEventsBTN : Locator;
    eventTitle : Locator;
    eventDiscription : Locator;
    eventCategory : Locator;
    eventCity : Locator;
    eventVenue : Locator;
    eventDateTime : Locator;
    eventTicketPrice : Locator;
    eventSeats : Locator;
    eventAddBTN : Locator;
    successMSG : Locator;
    textFieldErrorMSGs : Locator;
    eventsTable : Locator;
    confirmDeleteActionBTN : Locator;
    deleteEventSuccessMSG : Locator;

    constructor(page: Page){

        this.page = page;
        this.adminBTN = page.getByRole('button', { name: 'Admin' });
        this.manageEventsBTN = page.getByRole('navigation').getByRole('link', { name: 'Manage Events' });
        this.eventTitle = page.locator("#event-title-input");
        this.eventDiscription = page.getByPlaceholder("Describe the event…");
        this.eventCategory = page.locator("#category");
        this.eventCity = page.getByLabel('City');
        this.eventVenue = page.getByLabel('Venue');
        this.eventDateTime = page.getByLabel('Event Date & Time');
        this.eventTicketPrice = page.getByLabel('Price ($)');
        this.eventSeats = page.getByLabel('Total Seats');
        this.eventAddBTN = page.locator("#add-event-btn");
        this.successMSG = page.getByText('Event created!');
        this.textFieldErrorMSGs = page.locator('#admin-event-form p');
        this.eventsTable = page.locator('table #event-table-row');
        this.confirmDeleteActionBTN = page.locator('#confirm-dialog-yes');
        this.deleteEventSuccessMSG = page.getByText('Event deleted');
    }

    getFutureDateTime = (days = 1) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 16);
    };

    async addNewEvent(title: string , discription: string , option: string , city: string , venue: string , price: number , seats: number): Promise<any>{
        await this.adminBTN.click();
        await this.manageEventsBTN.click();
        await this.eventTitle.fill(title);
        await this.eventDiscription.fill(discription);
        await this.eventCategory.selectOption({value: option});
        await this.eventCity.fill(city);
        await this.eventVenue.fill(venue);
        await this.eventDateTime.fill(this.getFutureDateTime(7));
        await this.eventTicketPrice.fill(price.toString());
        await this.eventSeats.fill(seats.toString());
        await this.eventAddBTN.click();
        return title;
    }

    async deleteSpeceficEvent(title: string){
        const allEventsCount = await this.eventsTable.count();
        for(let i = 0 ; i < allEventsCount ; i++){
            const ticketTitle = await this.eventsTable.nth(i).locator('.truncate').textContent();
            if(ticketTitle === title){
                await this.eventsTable.nth(i).locator('#delete-event-btn').click();
                await this.confirmDeleteActionBTN.click();
                break;
            }
        }
    }

}