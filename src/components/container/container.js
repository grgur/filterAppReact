import React, {Component, PropTypes} from 'react';
import Filters from './filters/filters';
import Groups from './groups/groups';
import Movies from './movies/movies';

class Container extends Component {

  render() {
    return (
      <div id="container">
        <aside>
          <Filters/>
        </aside>
        <article>
          <Groups/>
        </article>
        <article>
          <Movies/>
        </article>
      </div>
    )
  }

}

export default Container;
