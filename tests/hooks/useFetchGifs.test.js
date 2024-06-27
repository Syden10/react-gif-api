/** @jest-environment jsdom */
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
import 'whatwg-fetch';

describe('useFetchGifs custom hook tests', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Cats'));
    const { images, isLoading } = result.current;
    // console.log(result);

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
    // useFetchGifs();
  });

  test('should return an images array while isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifs('Cats'));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
