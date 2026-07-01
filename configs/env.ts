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
};