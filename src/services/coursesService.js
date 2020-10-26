import httpClient from './httpClient';

class CoursesServices {
  static getCourses() {
    return httpClient.get('/courses');
  }
}

export default CoursesServices;
