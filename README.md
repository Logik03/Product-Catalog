# Angular Application

a product catalog using Angular.
Requirements:
1. Dynamic Filtering:
 Display a list of products fetched from a mock API.
 Allow users to filter products by category or price range.
2. Lazy Loading:
 Implement lazy loading for modules to improve performance.
3. Reactive Forms:
 Include a search bar using FormControl to dynamically filter the list of products.
4. Optional Bonus:
 Add a feature to edit

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Assumptions Made During Development](#assumptions-made-during-development)
- [Areas for Improvement](#areas-for-improvement)
- [Learn More](#learn-more)

## Installation

Before running the application, ensure you have the following installed:
- Node.js (version 18.0 or higher)
- npm (comes with Node.js)

1. Clone the repository
   ```bash
   git clone [your-repository-url]
   cd [project-root-folder]
   ```

2. Install dependencies:
   
   ```bash
   npm install
   # or
   yarn install
   ```
   
   If there are errors or dependency issues:
   ```bash
   npm install --legacy-peer-deps
   ```

## Running the Application

### Development Mode
To run the application in development mode:

```bash
npm start
# or
ng serve
```

This will:
- Start the development server
- Open [http://localhost:4200](http://localhost:4200) in your browser
- Enable hot reloading (the page will reload automatically when you make changes)
- Display lint errors in the console

### Production Build
To create a production build:

```bash
npm run build
# or
ng build
```

This will create an optimized production build in the `dist` folder, ready for deployment.

## Available Scripts

### `npm start` or `ng serve`
Runs the app in development mode. Open [http://localhost:4200](http://localhost:4200) to view it in the browser. The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm test` or `ng test`
Launches the test runner in interactive watch mode using Karma and Jasmine.

### `npm run build` or `ng build`
Builds the app for production to the `dist` folder. It correctly bundles Angular in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm run lint` or `ng lint`
Runs ESLint to check for code quality and style issues.

### `npm run e2e` or `ng e2e`
Runs end-to-end tests using Protractor or Cypress (depending on configuration).

## Assumptions Made During Development

- **Mock Data**: All data is present in the service layer, no external mock data server required
- **Screen Sizes**: The UI is optimized for desktop and tablet viewports, with basic mobile responsiveness
- **Data Format**: All API responses are expected to be in JSON format
- **Network Connectivity**: The application assumes a stable internet connection for API calls
- **JavaScript Enabled**: Users are expected to have JavaScript enabled in their browsers
- **Browser Compatibility**: The application is designed to work on modern browsers that support Angular

## Areas for Improvement

Given more time, the following enhancements could be implemented:

### Performance Optimizations
- Implement lazy loading for feature modules
- Add OnPush change detection strategy for better performance
- Implement virtual scrolling for large data sets

### User Experience
- More responsiveness on mobile devices
- Optimizing the UI display for better aesthetics
- Add loading states and skeleton screens
- Implement error boundaries for better error handling
- Add comprehensive form validation with user-friendly error messages
- Improve accessibility (ARIA labels, keyboard navigation, screen reader support)

### Testing
- Cover more unit testing
- Increase test coverage to 90%+ with unit and integration tests
- Add end-to-end testing with tools like Cypress or Protractor

### Code Quality
- Set up comprehensive TypeScript configurations and Prettier formatting
- Add pre-commit hooks with Husky for code quality enforcement
- Implement proper error handling and logging mechanisms

## Learn More

You can learn more in the [Angular documentation](https://angular.io/docs).

To learn TypeScript, check out the [TypeScript documentation](https://www.typescriptlang.org/docs/).

## Contributing
