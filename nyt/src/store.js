import { atom, selector } from "recoil";
import NytApi from './apis/nyt_api'
export const homeState = atom({
    key: 'homeState',
    default: 'home'
});

export const newsItemsHomeState = selector({
    key: 'newsItemsHomeState',
    get: ({get}) => {
        const home = get(homeState);
        
        return NytApi.getPosts(home);
    }
});