import { httpService } from './httpService';
export const addressService = {
    getCities,
    getStreets
}

async function getCities(hint) {
    const res = await httpService.get(`address/city?q=${hint}`);
    if (res.status === 200) return res.data;    
    return null;

}

async function getStreets(cityId, hint) {
    const res = await httpService.get(`address/street?cityId=${cityId}&q=${hint}`);
    if (res.status === 200);
    if (res.status === 200) return res.data;    
    return null;

}