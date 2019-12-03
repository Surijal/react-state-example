```
# React | state



<br>





### 1. What is the difference between the React's `function` components and `class` components ?

<br>

#### Function components

   [Function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) have props_____ object  which contains values passed to the component via props/attributes, and they don't have `render`  or lifecycle methods.		

   This is the reason why they are called "functional stateless components".		

   [Function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)  return_____ (`returns` or `renders` ?? ) a JSX string.

<br>

#### Class components

   Class components have state_____ and `props`.

   Class components have a render(){}_______  method which *renders* the JSX.


<br>


### 2.  What is the component `state` ?

   

   The `state` is an  Object_____  defined inside of the React `class` component. 

   React `class`  components have React's built-in method setState()_____ that we must use to update the `state`.

   React's built-in `setState()` method triggers render(){}______________________ when state is changed.

   

   Only the `class` component itself can define the state_______ or change it's existing state_______  through [`this.setState()`](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly). 



<br>



# Exercise



<br>



### Task 1

**a.** Using the npm package [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) create new project named `react-state-example`. 
Inside off the `src` directory create a new directory `components` to store your new components.



<br>



**b.** Create file `src/components/User.js` . 

Copy/paste the code provided in this gist (below) for the file `User.js`



<br>



**c.** Update the file `src/App.js`, by copy/pasting the code provided in this gist (below) for the file `App.js`.



<br>



### Task 2

Add an additional property `bootcamp: 'Ironhack'` to the `state` object of the root component `App.js`.



Pass/set this value as the prop ( `bootcampName={this.state.bootcamp}` ) to each of the `<User>` components in `App.js`.



After setting the prop, update the `User.js` component. by adding an additional `<h2></h2>` tag that will show the value passed via the prop `bootcampName`.

This `<h2>` tag should show the passed value as:

 ```jsx
<h2> Welcome To { /*Value from props bootcampName*/ }  </h2>
 ```







<br>



### Task 3

Edit the `clickHandler()` method in root component `App.js`, to change `state` property `backColor` to a random color every 5 clicks. 

Use the provided `colorMapper` function to get the random generated HEX color string.

When updating the state you must use the react [`setState()`](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly) method. 



<br>

Use the below snippet as the starting point:



##### `src/App.js`

​```js
//	src/App.js

// ...

//		...

clickHandler = () => {
  if ( /*Check click count if divisible by 5 */) {
      
      const newColor = this.colorMapper();
      const updatedCount = this.state.clickCount + 1; 
      
      // Use `this.setState()` to update the state object
  } else {
     
    const updatedCount = this.state.clickCount + 1;
    this.setState({ clickCount: updatedCount });
  }

}
​```



<br>



### Bonus



Create a new `class` component `Navbar.js`, which has a `state` with one property -`username: 'YOUR NAME'`.



Display this value in the `<p>` tag which will be showing in the navbar.

You can use the below snippet for your component elements.



Create a `Navbar.css` file and import it in the newly created component file. Use the below code snippet to add styles for the navbar.





**Remember to `export` the newly created `Navbar` component.**



When done, `import` the `Navbar` component in `App.js` component and place it as the first element so that it displays on the top of the page.



##### `src/components/Navbar.js`

​```jsx
// src/components/Navbar.js

// ...

//		...

//				...

     <nav id='navbar'>
       <ul>
         <a href="#"><li>Home</li></a>
         <a href="#"><li>Contact</li></a>
         <a href="#"><li>About</li></a>
       </ul>

       <div className="nav-details">
         <p className="nav-username"> Bob </p>
       </div>
     </nav>


​```



<br>



##### `src/components/Navbar.css`


​```css
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:  #352275;
  padding: 0px 40px;
}

#navbar li {
  list-style: none;
  display: inline-block;
  margin: 0px 40px; 
  font-size: 22px;
  color:white;
}

div.nav-details > * {
  display: inline-block;
  color: royalblue;
  font-size: 22px;
}
​```





<br>
```