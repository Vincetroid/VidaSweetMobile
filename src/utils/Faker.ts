import { faker } from '@faker-js/faker';

export function createRandomDataWithFaker() {
  return {
    color: faker.color.human(),
    description: faker.lorem.paragraph(),
    create_timestamp: new Date(),
    parangaricutirimicuaro: faker.color.space(),
    // create_timestamp: faker.date.past(),
  };
}
