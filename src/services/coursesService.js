import httpClient from './httpClient';

class CoursesServices {
  static getCourses({ limit, offset }) {
    return httpClient.get(`/courses?page[limit]=${limit}&page[offset]=${offset}`);
  }

  static addFavorite(course) {
    return httpClient.post('/my_list', course);
  }

  static removeFavorite(course) {
    return httpClient.delete('/my_list', { data: course });
  }
}

export default CoursesServices;
