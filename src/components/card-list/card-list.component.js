import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';



class CardList extends Component {
    render (){
        const {profiles} = this.props;

        return (
        <div className='card-list' >
                {profiles.map((profile) => {
                    return <Card profile={profile}/>;
                })}
        </div>
        );
    }
}

export default CardList;

/* 
Note. You can only have one parent level component and not contain siblings. Make sure there is only one top level component you are returning.
i.e. h1, p, inside div: 
<div><h1><p></p></h1></div>

Note: Lifecycle order: Components will also re-render when props change. Just like setState. Our props gives us the new profiles, we map over the profiles which is our props and that's how we see the UI update with all of the profiles.
This is what's important about components. We render based on two conditions when setState gets called and when props are updated.
This is how primarily React determines that you want to re-render because only when those things happen does React actually updates the DOM and try and see what are thse components and what are the n ew things that we need to return from them.
That's why render from cardlist gets called twice in Console.
*/