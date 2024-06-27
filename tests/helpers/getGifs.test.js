import { getGifs } from '../../src/helpers/getGifs';

describe('getGif() tests', () => {
  test('should return a gifs aray', async () => {
    const gifs = await getGifs('Cats');
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
