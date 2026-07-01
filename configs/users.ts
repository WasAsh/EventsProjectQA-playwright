import dotenv from "dotenv";

dotenv.config({
    path: `.env.${process.env.TEST_ENV || "production"}`
});

export const USERS = {

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