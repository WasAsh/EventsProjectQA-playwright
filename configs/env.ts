import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.TEST_ENV || "production"}`
});

export const ENV = {

    baseURL: process.env.BASE_URL as string,
    apiURL: process.env.API_URL as string,
    timeout: Number(process.env.TIMEOUT),
    retries : Number(process.env.RETRY),
    browserName : process.env.BROWSER as string,
    headless : Boolean(process.env.HEADLESS),
    screenshot : process.env.SCREENSHOT as any,
    workers: Number(process.env.WORKERS),
    video : process.env.VIDEO as any,
    trace : process.env.TRACE as any,
    eventTitle: process.env.EVENT_TITLE as string,
    eventPlacedName: process.env.EVENT_PLACED_NAME as string,
    eventPlacedPhone: process.env.EVENT_PLACED_PHONE as string,
    admin: {
        email: process.env.ADMIN_EMAIL as string,
        password: process.env.ADMIN_PASSWORD as string
    },

    user: {
        email: process.env.USER_EMAIL as string,
        password: process.env.USER_PASSWORD as string
    },

    fakeUser: {
        email: process.env.FAKE_USER_EMAIL as string,
        password: process.env.FAKE_USER_PASSWORD as string
    }
    
};