import { APIRequestContext } from '@playwright/test';
import { ENV } from '../configs/env';
import {EventDataModel} from '../utils/event_data_model';


let userLoggedToken;

export class ApiUtils {

    constructor(private api: APIRequestContext) {
        this.api = api;
    }

    async loginProcess(email: string, password: string) {

        const response = await this.api.post(
            `${ENV.apiURL}/auth/login`,
            {
                data: {
                    email,
                    password
                }
            }
        );
        const jsonResponse = await response.json();
        const userToken = await jsonResponse.token;
        userLoggedToken = userToken;
        return userToken;
    }

    async createNewEvent(productData: EventDataModel , token: string) {
        const response = await this.api.post(
            `${ENV.apiURL}/events`,
            {
                data: productData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        const jsonResponse = await response.json();
        const eventCreatedID = await jsonResponse.data.id;
        return eventCreatedID;
    }

    async getAllEvents(token: string){
        const response = await this.api.get(
            `${ENV.apiURL}/events`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        const allEvents = await response.json();
        return allEvents;
    }

}