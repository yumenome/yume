import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import cube from '../assets/c7.gif'
import { motion } from "framer-motion"

const Header = () => {

  const [scrollProgress, setScrollProgress] = useState(0);
  const[acitveLink, setActiveLink] = useState('story');

  useEffect(() => {
    const toScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.clientHeight - window.innerHeight;
      const progress = (scrollPosition / maxScroll) * 100; 
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', toScroll);

    return () => {
      window.removeEventListener('scroll', toScroll);
    };
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <Flex zIndex={'99'} py={'10px'} w={'100%'} px={'5%'} bg={'black'} position={'fixed'} alignItems={'center'} top={0} justifyContent={'space-between'} >
          <motion.div style={{ rotate: `${scrollProgress}deg`}}>
          <a href="#story" className={acitveLink === 'story' ? 'active test' : 'test' } onClick={() =>{setActiveLink('story')}}>
            <Image src={cube} width={{base: '45px',md: '55px'}} _hover={{cursor: 'pointer'}} />
          </a>
          </motion.div>

          <Flex justifyContent={'space-between'} w={{md:'40%',base: '50%'}} fontSize={{base: '15px',lg: '20px'}}>
              <Box _hover={{cursor: 'pointer'}}>
                <a href="#story" className={acitveLink === 'story' ? 'active test' : 'test' } onClick={() =>{setActiveLink('story')}}>story</a>
              </Box>
              <Box _hover={{cursor: 'pointer'}}>
                <a href="#skills" className={acitveLink === 'skills' ? 'active test' : 'test' } onClick={() =>{setActiveLink('skills')}}>skills</a>
              </Box>
              <Box _hover={{cursor: 'pointer'}}>
                <a href="#projects" className={acitveLink === 'projects' ? 'active test' : 'test' } onClick={() =>{setActiveLink('projects')}}>projects</a>
              </Box>
          </Flex>
      </Flex>
    </motion.div>

  )
}

export default Header