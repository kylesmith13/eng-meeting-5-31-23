# Things to talk about

typescript and strongly typed languages
- types files and how they explain to developers what to expect

composition
- matt cain has an article he would like to share
- atomic components and why they make you think about what you are building
- if you want a button with an avatar make a new molecule called ButtonWithAvatar. don't just add if statements to your other button and render an avatar when it gets passed in. this causes the component to become more complex, less reusable, and requires the developer to go to the code to figure out what's going on.

dependency injection -> loosely coupled components
- why should the media viewer know anything about the implementation details of an apiClient?
- BadMediaViewer vs MediaViewer
- allows the components to become more easily testable because they don't *rely* on another component to get their job done. put thought into what a component is and what it does.

higher order components or custom hooks?

why any of this stuff matters
why thinking about what you are building matters - can you compare it to building a house?
- do you build a 1 story home the same way you build a 100 story skyscraper?
- the funny thing about software is you don't know you are about to build 100 story skyscraper

i'm just doing this for now, i'll fix it later - no you won't