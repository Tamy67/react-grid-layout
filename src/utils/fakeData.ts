import { FakerData } from '../components/common_types/types';
import { faker } from '@faker-js/faker';

export function createUniqueImageUrl(category: string) {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substr(2);
  return `https://loremflickr.com/320/240/${category}?random=${uniqueId}`;
}

export function createFakeData(): FakerData {
  return {
    id: faker.number.int({ min: 1, max: 1000 }),
    image: {
      url: createUniqueImageUrl('nature'),
      alt: faker.lorem.words(3),
    },
  };
}
