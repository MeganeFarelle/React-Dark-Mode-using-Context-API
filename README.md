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
