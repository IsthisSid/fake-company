import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  
  // Constructor method is run initializing the state. First in lifecycle.
  constructor()
  {
    console.log('1-constructor');
    super();

    this.state = 
    {
      profiles: [],
      searchField: ''
    };
  }
 
  //Mounting is used to leverage this API call in order to retrieve data needed and display the appropriate UI.
  componentDidMount()
  {
    console.log('3-componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((response) => response.json())
      .then((users) => this.setState(() => { 
  //once we receive the response, re-render occurs (view console)
        return {profiles:users}
      })
    );
  }

  //OnSearchChange method created for optimization. Otherwise, it's an anonymous function inside render method.
  onSearchChange = (event) => 
  {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    },
    );
  }
  
  //Render gets called after constructor in lifecycle, mounting the UI onto the DOM. Keep note when re-render occurs.
  render()
  {
    console.log('2-render');

    const {profiles, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredProfiles = profiles.filter((profile)=> {
      return profile.name.toLocaleLowerCase().includes(searchField);
    });


    return (
    <div className="App">
      <h1 className='app-title'>IsthisSid.co, My Fake Company</h1>
      
      <SearchBox 
      className= 'profiles-search-box'
      onChangeHandler={onSearchChange}
      placeholder= 'search profiles'
      />
      <CardList profiles={filteredProfiles}/>
    </div>
    );
  }
  
}

export default App;

/*Lifecycle Order (presented as console.log(1, 2 and 3) -> view order on console, developer tools in browser): 
1. Constructor() is run initializing the state. It always gets run before anything. All we ever need to do here is initialize the state.
2. Then render will render the initial UI of the component that's inside render(). So it's actually going to mount this initial UI onto the DOM.
3. Once it mounts, it will run the lifecycle method componentDidMount(). The moment it mounts, it runs the code inside.
NOTE: Inside the componentDidMount, once a response is received meaning the state has changed, 
      re-render occurs and render() (2nd order of lifecycle) is run again.
*/

/* Additional Notes:
1. Always work on the functionality before you go into the css file.
2. Note class App contains code that looks like HTML. This app is written in JSX just like an HTML tag, the exact same way that these divs and this H1 and these inputs are as well. The reason for this is that React has created these HTML looking components for us. For every HTML tag, there is an equal react component. The reason React does this is because it allows us to bind once again the functionality to the UI. 
3. JSX is a syntax extension of javascript meaning that all of the rules of JavaScript apply to JSX, because you're really just writing javascript with additional functionality.
4. For this fake-company, as we were filtering profiles, we needed the original list of profiles to display. Because any future filters that we wanted to make should be made on the full list of profiles. It shouldn't be made on the filtered list of profiles, especially when we start removing characters in the searchfield, and we want to get back to that state of our original full list of profiles.
And the best place to keep track of that is in the state, so after you've updated state with the full original list, don't modify that, modify that somewhere else inside of our input because we want to access that input value. We want to store that somewhere where the rest of that component has access to it, not just in the callback. 
5. Note every component made by us should start with capitalized letter i.e. CardList component
6. App.js is the entrypoint and you can only have one for our entire application.
7. Mounting is the first time a component gets placed onto the DOM, so the first time React renders a 
component onto the page that is mounting and only happens once throughout a component's life.
Used anytime we need to leverage some kind of API call in order to get data that it needs to 
display the appropriate UI, you want to put that inside of your classDidMount.
8. Optimization techniques:  Used so we don't have to keep typing out 'this' and 'this.state' i.e. this.state.profiles, this.state

*/
