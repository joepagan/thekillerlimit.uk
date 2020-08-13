import style from './style';

import img from './../../assets//img/hero-bg.webp';

const hero = () => (
  <div class={style.hero}>
    <img loading="lazy" src={img} class={style.img} />
  </div>
);

export default hero;