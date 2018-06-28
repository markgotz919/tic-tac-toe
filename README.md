
today is 6/21 and I am adding this so I can try and commit this and start project rolling.


1) Here is the link to my wireframe:

https://docs.google.com/document/d/1MQkKS8Kp7tKYElQqdl_wzsfcBcVkfF3f2h96Hqp_MGY/edit?usp=sharing

***************************************************************

2) Here is the link to my user stories:

https://docs.google.com/document/d/1bYqj5b8Z1xiG0F4qUMo6S5t3y9UMVXRmWVL4JgV0WYo/edit?usp=sharing

***************************************************************

3) Technologies Used:
        a) HTML
        b) CSS
        c) JavaScript
        d) AJAX
        e) Jquery
        f) API
        g) Git and GitHub


4) It was hard to figure out the best way to set up the board, and figure out how the program would be able to register which box was clicked.  It was also hard to figure out if there was a winner because if the program saw matching empty squares it would also register a win, so I had to make sure there was something in the box.  It took a lot of time to make the sign up, sign in, and sign out work.


5) Unsolved Problems and Future Improvements:
        a) I wasn't able to implement the theme for the game that I was planning.
                *This tic-tac-toe game was planned to have a state capital theme.  Future versions of the game with have.
                        <> USA state theme.
                        <> Include State Capital questions before players can make a move on board.
                        <> Allow players to pick a state flag instead of X or O, and have the flags appear on the grid.
                        <>When a player wins include fireworks celebration display.
                        <> Highlight the 3 in the row that create win.
                        <> Inclue game over message.
                        <> Have to set up way for the game to be able to track moves and savethem to database.



[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# browser-template

A template for starting front-end projects. Webpack for `require` system, build
pipeline, and development server. Boostrap and Handlebars.js included. No
front-end frameworks included.

## Installation

1. [Download](../../archive/master.zip) this template.
1. Move to the `wdi/projects` directory, then unzip the template directory with
    `unzip /Users/<user-name>/Downloads/browser-template-master.zip`.
1. Rename the template directory from `browser-template-master` to
    `<project-name>-client`.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Replace all instances of `ga-wdi-boston.browser-template` with the name of
    your project.
1. Move into the new project and `git init`.
1. Add all of the files in your project with the command `git add --all`.
      - **Note: This is the only time you should run this command!**
1. Commit all of your files with the command `git commit`.
      - Your commit title should read `Initial commit`.
1. Install dependencies with `npm install`.
1. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
1. Name the new repository with the same name used on Step 3.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`config/environment.js`](config/environment.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt test`: runs any automated tests, depends on `grunt build`
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
