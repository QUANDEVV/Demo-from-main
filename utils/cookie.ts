import Cookie from "js-cookie";
import { v4 as uuidv4 } from 'uuid';

function generateUniqueId() {
    return uuidv4();
}

export const setVisitorCookie = () => {
    const uniqueId = generateUniqueId();

    Cookie.set("visitor", uniqueId, {
        expires: 365,
    })
}

export const getVisitorCookie = () => {
    return Cookie.get("visitor");
}