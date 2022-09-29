import { ItemType } from '../types/item';
import { fetchApi } from './fetchApi';

const URL = 'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8';

export const getItems = async () => await fetchApi<ItemType[]>(`${URL}/?format=json`)

export const getItemById = async (id: string) => fetchApi<ItemType>(`${URL}/${id}/?format=json`)