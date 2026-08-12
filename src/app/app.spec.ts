import { App } from './app';

describe('App', () => {
  it('should create the app', () => {
    const app = new App();
    expect(app).toBeTruthy();
  });

  it('should expose the app component metadata needed for the shell', () => {
    const app = new App();
    expect(app).toBeInstanceOf(App);
    expect(app.constructor.name).toBe('App');
  });
});
