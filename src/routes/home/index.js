import { h, Component } from 'preact';

import Hero from './../../components/hero';
import About from './../../components/about';
import Media from './../../components/media';
import Profiles from './../../components/profiles';
import Shows from './../../components/shows';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About state={this.props.state} setState={this.props.setState} />
        <Media />
        <Profiles />
        <Shows />
      </div>
    )
  }
}

// export default Home;
