import { Content } from '../../../src/app/entities/content/content';

describe('Content tests', () => {
  test('It should be able to acreate a valid content', () => {
    const content = new Content('Testing content entity');

    expect(content).toBeInstanceOf(Content);
    expect(content.value).toEqual('Testing content entity');
  });

  test('It should throw error due to less than 5 characters', () => {
    expect(() => new Content('Test')).toThrow();
  });

  test('It should throw error due to more than 240 characters', () => {
    expect(() => new Content('Test'.repeat(61))).toThrow();
  });
});
