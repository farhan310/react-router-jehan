# React Router Homework

## Startup Instructions

- clone this repo
- `cd` into the cloned directory
- `git remote rm origin`
- `yarn`
- `yarn start`

## Objective

- Given the startup code within this repo. We'd like to create a multi-page application that shows a different component governed by the url path. Notice that in the `components` directory, there's a handful of components already built out for you. Your job is the get these components to render at the given path! Below are the "broad" steps on how we can achieve these goals, feel free to use this a guideline on how to approach the problem.

(1) Add `react-router-dom` as a dependency using `yarn add`

(2) Wrap the `main` tag and everything inside of it with a `BrowserRouter` component

- https://reactrouter.com/web/api/BrowserRouter

(3) Create a `route` for each of the following components

- `Home` -> `/`
- `BurgerKing` -> `/bk`
- `Popeyes` -> `/plk`
- `TimHortons` -> `/th/:adjective`
- https://reactrouter.com/web/api/Route

(4) You'll notice thart the `TimHortons` route is different than the rest. It has an additional segment following the brand, `:adjective`. This is what is known as a `param`. We use `params` to pass data through the url, you've seen this before when creating routes with `express`, the concept is essentially the same, the `param` is simply a placeholder for whatever text you put at that position of the url! With this in mind, let's modify the `TimHortons` component to read the `adjective` param from the url and display it within the `h3` tag.

- https://reactrouter.com/web/api/Hooks
- https://reactrouter.com/web/example/url-params

(5) Modify the `NavBar` component so instead of `a` tags, it uses `react-router-dom` components that will handle navigation without causing a page refresh. Bonus points if you utilize one of these components to apply an `activeClassName` of `"activeTab"` for the route that is currently being displayed. You can hardcode an adjective for `TimHorton`'s param.

- https://reactrouter.com/web/api/Link
- https://reactrouter.com/web/api/NavLink
- https://reactrouter.com/web/api/NavLink/activeclassname-string
