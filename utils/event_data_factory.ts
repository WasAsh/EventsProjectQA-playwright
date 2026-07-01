import { faker } from "@faker-js/faker";
import {EventDataModel} from '../utils/event_data_model';


export class EventDataFactory {

    static create(overrides: Partial<EventDataModel> = {}) : EventDataModel{
        return {
            title: faker.lorem.words(4),
            description: faker.lorem.paragraph(),
            category: 'Sports',
            venue: faker.location.street(),
            city: faker.location.city(),
            eventDate: faker.date
                .soon({ days: 30 })
                .toISOString(),
            price: faker.number.int({
                min: 10,
                max: 500
            }),
            totalSeats: faker.number.int({
                min: 20,
                max: 500
            }),
            ...overrides
        }
    }

}