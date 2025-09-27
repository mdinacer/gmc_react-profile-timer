# React Class Component Profile

## Overview
This project demonstrates creating a class-based React component with state management, lifecycle methods, and time interval tracking.

## Instructions

### 1. Create React App
```bash
npx create-react-app react-class-component-profile
cd react-class-component-profile
```

### 2. Transform App.js to Class Component
- Convert the functional `App.js` component to a class-based component
- Extend `React.Component`
- Use `render()` method to return JSX

### 3. Implement State
Create a state object containing:
- **Person object** with properties:
  - `fullName`: Person's complete name
  - `bio`: Biography/description
  - `imgSrc`: URL or path to person's image
  - `profession`: Person's job/profession
- **Boolean `shows`**: Controls visibility of person's profile

### 4. Toggle Functionality
- Add a button that toggles the `shows` state
- When `shows` is `true`: Display the person's profile
- When `shows` is `false`: Hide the person's profile

### 5. Time Interval Tracking
- Display the time elapsed since component was mounted
- Use `componentDidMount()` lifecycle method
- Implement `setInterval()` to update time every second
- Show time in a user-friendly format (e.g., "X seconds ago", "X minutes ago")

### Project Structure
```
src/
├── App.js          (Class-based component with state)
├── App.css         (Styling for the component)
├── index.js        (Entry point)
└── index.css       (Global styles)
```

### Key Features to Implement
- ✅ Class-based React component
- ✅ State management with person object and boolean toggle
- ✅ Toggle button to show/hide profile
- ✅ Person profile display (name, bio, image, profession)
- ✅ Time tracking since component mount
- ✅ Component lifecycle methods (componentDidMount)
- ✅ setInterval for time updates

### Component Lifecycle Methods to Use
- **componentDidMount()**: Set up the interval timer
- **componentWillUnmount()**: Clean up the interval (optional but recommended)

### State Structure Example
```javascript
state = {
  person: {
    fullName: "John Doe",
    bio: "Software Developer with 5 years of experience",
    imgSrc: "path/to/image.jpg",
    profession: "Full Stack Developer"
  },
  shows: false
}
```

### Running the Project
```bash
npm start
```

The application will run on `http://localhost:3000`

## Key Concepts Demonstrated
- **Class Components**: Using ES6 classes to create React components
- **State Management**: Managing component state with this.state
- **Event Handling**: Button click events to toggle state
- **Conditional Rendering**: Show/hide content based on state
- **Component Lifecycle**: Using componentDidMount for setup
- **Time Intervals**: Using setInterval for periodic updates
- **State Updates**: Using this.setState() to update component state

## Learning Objectives
After completing this project, you will understand:
- How to create class-based components
- How to manage component state
- How to handle user interactions
- How to use component lifecycle methods
- How to work with time intervals in React
- How to implement conditional rendering

## Tips
- Remember to bind event handler methods or use arrow functions
- Clean up intervals in componentWillUnmount to prevent memory leaks
- Use this.setState() to update state, never mutate state directly
- Consider formatting the time display for better user experience
