### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  React is a frontend javascript framework and you would use it to avoid repeating code.
- What is Babel?
  toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers
- What is JSX?
  Used in react to imbed javascript expressions
- How is a Component created in React?
  Through the use of hooks
- What are some difference between state and props?
  props are immutable and state is mutable.
- What does "downward data flow" refer to in React?
  how to pass data to another component
- What is a controlled component?
  a component that react renders and builds and can be used by react
- What is an uncontrolled component?
  an uncontrolled component is a component that is not made by react and not controlled by react
- What is the purpose of the `key` prop when rendering a list of components?
  it is used to send certain data or functions down to another component
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  the index could be deleted and everything else will shift and throw off react
- Describe useEffect. What use cases is it used for in React components?
  useEffect hooks allows you to perform side effects in your components
- What does useRef do? Does a change to a ref value cause a rerender of a component?
  useRef Hook allows you to persist calues between renders.
- When would you use a ref? When wouldn't you use one?
  It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
- What is a custom hook in React? When would you want to write one?
  If you have repeating code you can use custom hooks to cleanup your code.
