import { configureStore } from "@reduxjs/toolkit";

import blogReducer from "./slice/blog/blogSlice";
import contactReducer from "./slice/contact/contactSlice"
import waitlistReducer from "./slice/waitlist/waitlistSlice";
import demoReducer from "./demo-data/demoSlice";

export const store = configureStore({
    reducer: {        
        blog: blogReducer,
        contact: contactReducer,
        waitlist: waitlistReducer,
        demo: demoReducer
    }
})