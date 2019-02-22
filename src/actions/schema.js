import {schema } from 'normalizr';

export const restaurant = new schema.Entity('restaurant');
export const restaurants = new schema.Array('restaurants',{
    collection:restaurant
});
export const normalizedapi = new schema.Entity('final',{
    restaurants:[restaurants]
})
