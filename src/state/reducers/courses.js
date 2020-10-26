import { createReducer } from '@reduxjs/toolkit';

import { getCourses } from '../actions/courses';


const initialState = {
  loading: false,
  //TODO: remove mocked data when connection with backend
  list: [{
    "title": "Teaches the Art of Home Cooking",
    "description": "In 16+ lessons, learn to cook beautiful, seasonal meals at home from the James Beard Award-winning founder of Chez Panisse.",
    "instructor_name": "Alice Waters",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/1060/original/1510617641-Headshot.jpg",
    "my_list": false,
    "id": 65
  },
  {
    "title": "Teaches Country Music",
    "description": "Reba teaches her approach to making great country music and navigating the business in 21 video lessons.",
    "instructor_name": "Reba McEntire",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/303/original/1476326407-headshotv10.jpg",
    "my_list": false,
    "id": 11
  },
  {
    "title": "Teaches Interior Design",
    "description": "Award-winning designer Kelly Wearstler teaches you interior design techniques to make any space more beautiful, creative, and inspiring.",
    "instructor_name": "Kelly Wearstler",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/11236/original/1584493236-headshot.jpg",
    "my_list": false,
    "id": 188
  },
  {
    "title": "Teaches the Art and Soul of Guitar",
    "description": "Carlos Santana teaches you how he creates a distinct, soulful guitar sound that moves the hearts of audiences.",
    "instructor_name": "Carlos Santana",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/2272/original/1544749255-Headshot.jpg",
    "my_list": false,
    "id": 92
  },
  {
    "title": "Teaches ʻUkulele",
    "description": "Jake Shimabukuro teaches you how to take your ʻukulele from the shelf to center stage, with techniques for beginners and seasoned players alike.",
    "instructor_name": "Jake Shimabukuro",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/11603/original/1597865959-JSh_headshot.jpg",
    "my_list": false,
    "id": 194
  },
  {
    "title": "Teaches Electric Guitar",
    "description": "In 26 lessons, Grammy-winning musician Tom Morello will teach you the guitar techniques, rhythms, and riffs that define his signature style.",
    "instructor_name": "Tom Morello",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/1861/original/1540187470-Headshot.jpg",
    "my_list": false,
    "id": 79
  },
  {
    "title": "Teaches Shooting, Ball-Handling, and Scoring",
    "description": "The two-time MVP breaks down his mechanics, drills, mental attitude, and scoring techniques.",
    "instructor_name": "Stephen Curry",
    "instructor_image_url": "https://masterclass.pizza/course-images/images/1002/original/1510789757-Headshot_V2.jpg",
    "my_list": false,
    "id": 63
  }]
};

const actionHandlers = {
  [getCourses.pending]: (state) => {
    state.loading = true;
  },
  [getCourses.fulfilled]: (state, { payload }) => {
    state.list = payload;
    state.loading = false;
  },
};

export default createReducer(initialState, actionHandlers);
