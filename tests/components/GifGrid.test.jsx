/** @jest-environment jsdom */
import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('<GifGrid /> component tests', () => {
  const category = 'Cats';
  test('should show loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
    screen.debug();
  });

  test('should display items when images are loaded with useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'A title',
        url: 'https://test.com/image.jpg',
      },
      {
        id: '123',
        title: 'Another title',
        url: 'https://test.com/image2.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    screen.debug();
  });
});
