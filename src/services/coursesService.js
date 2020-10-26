import httpClient from './httpClient';

class CoursesServices {
  static getCourses(limit, offset) {
    return httpClient.get(`/courses?page[limit]=${limit}&page[offset]=${offset}`);
  }

  static addFavorite(data) {
    return httpClient.post('/my_list', data);
  }

  static removeFavorite(data) {
    return httpClient.delete('/my_list', data);
  }
}

export default CoursesServices;
