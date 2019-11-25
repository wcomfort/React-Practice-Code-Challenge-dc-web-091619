import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
   console.log(props)
 return (
    <Fragment>
   {
     props.sushi.map(sushi => 
     <Sushi key={sushi.id} 
     eatenSushi={props.eatenSushi}
     cash={props.cash}
     paySushi={props.paySushi} 
     sushi={sushi}/>)
   }
    <MoreButton moreSushi = {props.moreSushi}/>
    </Fragment>
  ) 
}

export default SushiContainer