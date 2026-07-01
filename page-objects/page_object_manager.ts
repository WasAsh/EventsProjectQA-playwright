import {Page} from '@playwright/test';
import {LoginPage} from '../page-objects/login_page';
import {HomeEventPage} from '../page-objects/home_event_page';
import {EventDetailsPage} from '../page-objects/event_details_page';
import {EventTicketsPage} from '../page-objects/event_tickets_page';
import {ManageEvents} from '../page-objects/manage_events';
import {RegisterUser} from '../page-objects/register_user_page';



export class PageObjectManager{

    page : Page ;
    loginPage : LoginPage ;
    homeEventPage : HomeEventPage ;
    eventDetailsPage : EventDetailsPage;
    eventTicketsPage : EventTicketsPage;
    manageEvents : ManageEvents;
    regesterUser : RegisterUser;

    constructor(page : Page){
        this.page = page ;
        this.loginPage = new LoginPage(this.page);
        this.homeEventPage = new HomeEventPage(this.page);
        this.eventDetailsPage = new EventDetailsPage(this.page);
        this.eventTicketsPage = new EventTicketsPage(this.page);
        this.manageEvents = new ManageEvents(this.page);
        this.regesterUser = new RegisterUser(this.page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getHomeEventPage(){
        return this.homeEventPage;
    }
    
    getEventDetailsPage(){
        return this.eventDetailsPage;
    }

    getEventTicketsPage(){
        return this.eventTicketsPage;
    }

    getManageEventsPage(){
        return this.manageEvents;
    }

    getRegisterUserPage(){
        return this.regesterUser;
    }
}