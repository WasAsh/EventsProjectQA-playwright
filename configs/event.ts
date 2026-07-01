import dotenv from "dotenv";


dotenv.config({
    path: `.env.${process.env.TEST_ENV || "production"}`
});

export const EVENTS = {
    eventTitle: process.env.EVENT_TITLE as string,
    eventPlacedName: process.env.EVENT_PLACED_NAME as string,
    eventPlacedPhone: process.env.EVENT_PLACED_PHONE as string,
}