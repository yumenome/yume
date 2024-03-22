import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import cube from '../assets/cube.gif'

const Home = () => {
  return (
    <Flex id='story' flexDirection={'column'} w={'90%'} mx={'5%'} mt={{md: '50px',base: '50px'}} mb={'20px'}>
        <Flex ms={{base: '30px'}} mb={{lg: '-30px',md: '7px',base: 0}} alignItems={'center'} justifyContent={'center'}>
        <Text fontSize={{md: '80px',lg: '150px',base: '50px'}} me={{base: '-20px'}} zIndex={'2'}  className='test'>yumenomE</Text>
        <Image src={cube} width={{base: '120px',md: '200px',lg: '330px'}}  />
        </Flex>

        <Flex mx={{lg: '13%',base: '0%',md: '15%'}} bg={'transparent'}>
        <Flex flexDirection={'column'}>
          <Text  textAlign={'start'} textColor={'white'} fontSize={{base: '12px',md: '14px',lg: '17px'}}>
          I'm a junior web developer sailing the vast seas of web development.<span className='test' >REACT</span> as my guiding star & <span className='test' >LARAVEL</span> as the main mast for my sails, each line of code written has been a step closer to mastering the art of full-stack development...
          </Text>
        </Flex>
        
        </Flex>
    </Flex>
  )
}

export default Home