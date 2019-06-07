- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property to check if your data you are receiving has bugs.

- [ ] Describe a life-cycle event in React?

Lifecycle's in React are set of phases in a component’s life: Birth/Mounting, Growth/Updating and Death/Unmounting.

componentDidMount():
Your component has been mounted and is now ready, that’s when the next React lifecycle method componentDidMount() comes in play.
This life-cycle is called as soon as the component is mounted and ready. This is a good place to initiate API calls, if you need to load data from a remote endpoint.Unlike the render() method, componentDidMount() allows the use of setState(). Calling the setState() here will update state and cause another rendering but it will happen before the browser updates the UI. This is to ensure that the user will not see any UI updates with the double rendering.


- [ ] Explain the details of a Higher Order Component?

A Higher Order Component (HOC) is an advanced React JS pattern that allows us the capability of reusing component logic. A HOC is a function that receives a Component as an argument and returns a new component.
We can so avoid repitition.


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

Reactstrap:  Bootstrap Styling library for React Components where you can very fast achieve good styling for your website .

Styled Components: is a library for writing CSS in our JS files.(we can here use props and kind of mixins like in LESS)

CSS file: you can like with every project create your CSS file and write your CSS there.

Material-UI: libary like Bootstrap.