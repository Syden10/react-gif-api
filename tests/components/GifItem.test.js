/** @jest-environment jsdom */
import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('test on GifItem', () => {
  const title = 'A title';
  const url = 'https://test.com/image.jpg';
  test('should match snapshot', () => {
    const { container } = render(<GifItem url={url} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show image and title', () => {
    render(<GifItem url={url} title={title} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
    // screen.debug();
    // console.log(screen.getByRole('img').src);
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
  });

  test('should render title', () => {
    render(<GifItem url={url} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
