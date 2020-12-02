import { Query } from './index';

/* const insert = (restaurantsid: number, tags: []) => {
  tags.forEach(tag => {
    Query(`
    insert into businesstags (tagsid, restaurantsid)
values(?, ?)`,
    [restaurantsid, tag])
  })
}*/

const oneRestaurantTag = (restaurantsid: any) => Query(`call spRestaurantTags(?)`, [restaurantsid]);

export default {
  oneRestaurantTag,
}