// Everything about the blog that isn't a post lives here.
// Change a value, save, and the site updates.

export const site = {
  // Shown in the browser tab and the footer.
  name: "acsah's blog",

  // The wordmark in the top-left corner.
  logo: 'acsah.',

  tagline: "Notes on code, life and whatever I'm figuring out in between.",

  author: {
    name: 'Acsah',
    // To use a photo: put it in src/assets, import it at the top of this
    // file (import photo from './assets/me.jpg') and set photo: photo.
    photo: null,
    // The short version, shown on the homepage.
    bio: "I write about code, life and whatever I'm figuring out in between.",
  },

  // The About page. One string per paragraph.
  about: [
    "This is where I keep the things I'd otherwise forget: what I'm building, what I'm learning and what's on my mind.",
    'Some posts are technical and some are personal. The category on each one tells you which you are getting.',
  ],

  // Links in the footer and on the About page. Add or remove freely.
  links: [{ label: 'GitHub', href: 'https://github.com/acsahl' }],

  // Each category gets a color: 'pink', 'blue', 'green' or 'butter'.
  // A post's category must match one of these names exactly.
  categories: {
    Code: 'blue',
    Projects: 'green',
    Life: 'pink',
    Notes: 'butter',
  },

  newsletter: {
    pitch: 'Get new posts in your inbox',
    // Paste the form address from your newsletter provider here to switch
    // sign-ups on. While it is empty the form is shown but turned off.
    formAction: '',
    // The name your provider expects for the email field.
    emailField: 'email',
  },
}
