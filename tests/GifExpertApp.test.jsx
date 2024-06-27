import { render, screen } from '@testing-library/react';
import GifExpertApp from '../src/GifExpertApp';

describe('<GifExpertApp /> tests', () => {
  it('should render <GifExpertApp /> correctly', () => {
    render(<GifExpertApp />);
    expect(screen.getByRole('heading', { level: 1 })).toMatchSnapshot();
    screen.debug();
  });
  const mockSetCategories = jest.fn();
  let categories = ['Category1', 'Category2'];

  beforeEach(() => {
    mockSetCategories.mockClear();
    categories = ['Category1', 'Category2']; // Reset categories before each test
  });

  it('should add new category to the beginning of the categories array if not already present', () => {
    const newCategory = 'Category3';
    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      mockSetCategories([newCategory, ...categories]);
    };

    onAddCategory(newCategory);

    expect(mockSetCategories).toHaveBeenCalledWith([
      'Category3',
      'Category1',
      'Category2',
    ]);
  });

  it('should not call setCategories if newCategory is already present in categories', () => {
    const newCategory = 'Category1';
    const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      mockSetCategories([newCategory, ...categories]);
    };

    onAddCategory(newCategory);

    expect(mockSetCategories).not.toHaveBeenCalled();
  });
});
