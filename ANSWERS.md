1. What are PropTypes used for?

   Proptypes are used to verify that the correct type of prop is being handed down. It is important to check our data to ensure that the final result is bug free before it becomes a bigger problem. It also helps make code easier to understand for future devs trying to reuse our components.

2. Describe a life-cycle event in React?

   A lifecycle event is a method that you can use on a component. They are used to update state or UI features.

3. Explain the details of a Higher Order Component?

   A higher order component takes in another component as an argument. They allow us to resue common pieces of code to make our work even more DRY.

4. What are three different ways to style components in React? Explain some of the benefits of each.

   Css Stylesheet: Basic and simple to use. Pretty much every dev knows how to do this. One of the major downsides is the use of global scope, making it difficult to use on bigger projects in case a class name is reused on another component.

   Styled-components: Style your components using components! These have the ability to take in props to dynamically update styles. Reusable and the code is easier to digest with clear names vs html tag + class names.

   Inline CSS: We are able to see what we are passing in clearly since the CSS is passed in as a declared object filled with CSS.
