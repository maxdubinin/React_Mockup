export default class ApiService {

    _apiBase = 'http://www.omdbapi.com/?apikey=8b47da7b&s=People';

 
    async getData () {
      const res = await fetch(`${this._apiBase}`);
    
      if(!res.ok) {
        throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`)
      }
      return await res.json();
    }
  
    async getMovies() {
      const res = await this.getData();
      return res.Search;
    }
  }


