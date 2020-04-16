### Local Installation

 To run on your local machine:
 1. Clone down this repo `$ git clone git@github.com:rosetta-team/rosetta-fe.git`
 2. Change into this directory `$ cd rosetta-fe`
 3. Run `npm install`
 4. Run `npm run dev` to get your development server running
 5. After steps 1-4 are complete, you can go to your browser and view the app on `localhost:3000`

** **NOTE** ** If you have another server running, you'll need to shut down all servers by running control + c

### Testing & Test Coverage

To run test suite:
```
npm test
```

To run test suite with coverage report:
```
npm test -- --coverage --watchAll
```

After running coverage report, to open graphic interface version:
```
open coverage/lcov-report/index.html
```

### Technologies and Frameworks

- React
- Redux
- Apollo Client & GraphQL
- Jest & React Testing Library
- Prism.js

### Resource Credits

 - Boilerplate code for a Prism component: https://betterstack.dev/blog/code-highlighting-in-react-using-prismjs/
 - "Tomorrow Night" theme CSS for syntax highlighting: https://prismjs.com/
