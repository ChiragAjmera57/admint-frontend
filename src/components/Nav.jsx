import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'


export default function Nav() {
  return (
    <div className='nav'>
    <Link to={'/'} relative="path"> <div className="addbtn">
    <Button mr={4} colorScheme='blue'>DASHBOARD</Button>
    </div></Link>
    <Link to={'/stats'} > <div className="addbtn">
    <Button colorScheme='blue'>STATS</Button>
    </div></Link>
    </div>
  )
}
