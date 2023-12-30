import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          There are many card deals out there but we can confidently say ours is among the best you will find in today's bubbling market. So look through our plans, we guarantee you will find one that is right up your alley.
        </p>
        <Button styles='mt-10'/>
      </div>
      
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default CardDeal