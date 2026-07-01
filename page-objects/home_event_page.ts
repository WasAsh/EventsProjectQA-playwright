import {Page , Locator} from '@playwright/test';


export class HomeEventPage{

    page : Page ;
    eventBTN : Locator;
    homeText : Locator;
    eventsCards : Locator;
    filterSection : Locator;
    searchBar : Locator;
    emptyPageContent : Locator;
    eventCardCategoryBadge : Locator;
    clearBTN : Locator;

    constructor(page: Page){

        this.page = page;
        this.eventBTN = page.locator('nav a#nav-events');
        this.homeText = page.locator('main h1');
        this.eventsCards = page.locator('main article');
        this.filterSection = page.locator('main select');
        this.searchBar = page.locator('input[placeholder*="Search events"]');
        this.emptyPageContent = page.locator('.text-center h3');
        this.eventCardCategoryBadge = page.locator('.ring-amber-200');
        this.clearBTN = page.locator('button:has-text("Clear filters")');

    }
}