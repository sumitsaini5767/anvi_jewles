import React from 'react'
import Section_i from './Section_i';
import Section_ii from './Section_ii';
import Best_sell_prods from './Best_sell_prods';
import Categories from './Categories';
import Latest_prods from './Latest_prods'
import News_feed from './News_feed'
import Counter from './Counter';

export default function Homepage() {
  return (
    <div>
      <Section_i/>
      <Section_ii/>
      <Best_sell_prods/>
      <Categories/>
      <Latest_prods/>
      <News_feed/>
      <Counter/>
    </div>
  )
}
