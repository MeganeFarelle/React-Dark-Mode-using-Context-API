🌗 React Dark Mode — Context API

This project is a clean example of how to build a global dark mode system in React using the Context API.
Instead of passing props through multiple components, a custom provider shares the theme state (isDark) across the entire application.

🔥 What the project includes

⭐ Global theme state (light/dark) using React Context

⭐ A custom DarkModeProvider wrapping the entire application

⭐ A ChangeMode button allowing theme toggling

⭐ A responsive layout structure:

Header

MainContent

Footer

⭐ Styling powered by TailwindCSS

⭐ Clean folder structure (components + context)

🧠 Key learning objectives

Understand how to create and initialize a React Context

Build a custom Provider to share a global state

Use useContext to access shared data in any component

Apply conditional styling based on context state

Avoid prop drilling by using a global store

🎨 Dark Mode Behavior

When the user clicks the “Toggle Theme” button:

isDark flips between true and false

The entire app updates instantly (background + text colors)

All components react to the theme change because they consume the same context

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
