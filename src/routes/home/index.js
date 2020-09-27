import Hero from './../../components/hero';
import About from './../../components/about';
import Media from './../../components/media';
import Profiles from './../../components/profiles';
import Shows from './../../components/shows';

const Home = ({children, ...props}) => (
  <div>
    <Hero />
    <About state={props.state} />
    <Media />
    <Profiles />
    <Shows state={props.state} />
  </div>
);

export default Home;
