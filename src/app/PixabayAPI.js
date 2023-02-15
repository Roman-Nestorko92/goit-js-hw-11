import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '33632271-865dceae4afc82cedaa0ea243';
// const BASE_URL = 'https://pixabay.com/api/';
// const KEY = '33632271-865dceae4afc82cedaa0ea243';
//  const SET_URL = `&per_page=4&page=1&image_type=photo&orientation=horizontal&safesearch=true`;

export class PixabayAPI {
  #page = 1;
  #per_page = 40;
  #query = '';
  #totalPages = 0;
  async getPhotos() {
    const params = {
      page: this.#page,
      q: this.#query,
      per_page: this.#per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    };

    const urlAXIOS = `?key=${API_KEY}`;
    //let urlAXIOS = 'https://pixabay.com/api/'
    const { data } = await axios.get(urlAXIOS, { params });
    return data;
  }
  
  
  get query() {
    this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  incrementPage() {
    this.#page += 1;
    axios.get(urlAXIOS).refresh();
  }

  resetPage() {
    this.#page = 1;
    //observer.observe(guard)
  }

  setTotal(total) {
    this.#totalPages = total;
  }

  hasMorePhotos() {
    return this.#page < Math.ceil(this.#totalPages / this.#per_page);
  }
}
