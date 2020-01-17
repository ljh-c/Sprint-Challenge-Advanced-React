- [ ] Why would you use class component over function components (removing hooks from the question)?

`Many code bases still use class components in old code, or may rely on older versions of React. Also, lifecycle methods cannot be used in function components.`

- [ ] Name three lifecycle methods and their purposes.

`* componentDidMount is invoked after the component is mounted to the DOM / as soon as the component loads. It is good for setting up API calls and adding event listeners.`
`* componentDidUpdate is invoked after the component’s state or props have been updated.  It is similar to the useEffect hook.`
`* componentWillUnmount is invoked right before a component is unmounted. It is good for methods that need to be cleaned up, such as removing event listeners and clearing interval timers. This will prevent performance issues.`

- [ ] What is the purpose of a custom hook?

`The purpose of a custom hook is to extend multiple pieces of stateful logic in a reusable way. Stateful logic in code acts on and manipulates state (directly or indirectly).`

- [ ] Why is it important to test our apps?

`Automated testing surfaces bugs faster and makes us think about edge cases - it makes codebases maintainable and easier to refactor. Testing allows us to be confident that our code will work for users.`