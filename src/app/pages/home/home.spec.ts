import { HomePageComponent, STORYBOOK_URL, STORYBOOK_WINDOW_FEATURES } from './home';
import { vi } from 'vitest';

describe('HomePageComponent', () => {
  it('opens Storybook in a new tab', () => {
    const component = new HomePageComponent();
    const openSpy = vi.fn();
    const getWindowSpy = vi
      .spyOn(
        component as unknown as { getWindow: () => Pick<Window, 'open'> | undefined },
        'getWindow',
      )
      .mockReturnValue({ open: openSpy });

    component.openStorybook();

    expect(openSpy).toHaveBeenCalledWith(STORYBOOK_URL, '_blank', STORYBOOK_WINDOW_FEATURES);

    getWindowSpy.mockRestore();
  });

  it('does nothing when window is not available', () => {
    const component = new HomePageComponent();
    const getWindowSpy = vi
      .spyOn(
        component as unknown as { getWindow: () => Pick<Window, 'open'> | undefined },
        'getWindow',
      )
      .mockReturnValue(undefined);

    expect(() => component.openStorybook()).not.toThrow();

    getWindowSpy.mockRestore();
  });
});
