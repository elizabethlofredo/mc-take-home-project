import httpClient from './httpClient';

class CoursesServices {
  static getCourses() {
    return httpClient.get('/courses');
  }

  static addFavorite(data) {
    return httpClient.post('/my_list', data);
  }

  static removeFavorite(data) {
    return httpClient.delete('/my_list', data);
  }
}

export default CoursesServices;
