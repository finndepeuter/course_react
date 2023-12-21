import { atom, selector } from "recoil";
import NytApi from './apis/nyt_api'

export const categoryState = atom({
    key: 'categoryState',
    default: 'politics' // Default category is politics
});

export const newsItemsState = selector({
    key: 'newsItemsState',
    get: async ({get}) => {
        const category = get(categoryState);
        try {
            // Fetch data from the New York Times API
            const response = await NytApi.getPosts(category);
            const firstposts = response.data.results;

            // Process the posts to add image_url
            const posts = firstposts.map(post => {
                if (post.multimedia) {
                    let imgObj = post.multimedia.find(media => media.format === "superJumbo");
                    post.image_url = imgObj ? imgObj.url : "no-image.jpg";
                } else {
                    post.image_url = "no-image.jpg";
                }
                return post;
            });

            return posts;
        } catch (error) {
            console.error('Error fetching news items:', error);
            throw error; // re-throw the error to propagate it to the component
        }
    }
});
