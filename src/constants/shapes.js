import { number, string, bool } from 'prop-types';

export const courseShape = {
  id: number.isRequired,
  title: string.isRequired,
  description: string.isRequired,
  instructor_name: string.isRequired,
  instructor_image_url: string.isRequired,
  my_list: bool.isRequired,
};
