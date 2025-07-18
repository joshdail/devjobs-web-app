# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l).

## Overview

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- Have the correct color scheme chosen for them based on their computer preferences.

### Links

- Solution URL: [https://github.com/joshdail/devjobs-web-app](https://github.com/joshdail/devjobs-web-app)
- Live Site on Netlify: [Click here to open](https://unique-froyo-f20fdf.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/)

I had quite a bit of difficulty trying to set up Vite using npm. Even following the instructions step by step, the project would not run. I was able to set up the project without hassle using [Yarn](https://yarnpkg.com/) instead.

Quite a few times lately I have tried setting up a framework with npm, following the exact step-by-step instructions, but the project will not run. I have noticed that Yarn seems to work a lot better, at least on my system.

One of the challenging aspects of this project was the custom list item markers. After trying to work with the li::marker attribute, I ended up finding it better to just get rid of the marker altogether and use custom pseudo-classes instead:

```
ol,
ul {
  list-style-type: none;
  list-style-position: outside;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

ol {
  counter-reset: count;
}

li {
  position: relative;
}

li::before {
  color: var(--clr-violet);
  font-weight: var(--fw-bold);
  position: absolute;
  left: 0;
}

ul li::before {
  content: "\2022";
}

ol li {
  counter-increment: count;
}

ol li::before {
  content: counter(count) "";
}

li {
  padding-left: 2.75rem;
}
```

Finally, getting the static assets to work with Vite. This was one of the last and most difficult hurdles. Vite requires that urls for static files be treated as imports. For production, I needed to go through and make sure the images urls were imported and then used as variables, not placed directly in the img tags. Also, for the json data, I had to move the json data and logo image assets into the public directory and adjust the urls in the json file accordingly.

### Useful resources

- [MDN Documentation on matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) - This was useful for checking prefers-color-scheme in my JS Code. The toggle and the initial state for the display mode are set to light or dark based on whether a preference for dark mode is specified by the system

## Author

- Github - [joshdail](https://github.com/joshdail)
- Frontend Mentor - [@joshdail](https://www.frontendmentor.io/profile/joshdail)
