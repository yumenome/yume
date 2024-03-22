import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import fb_icon from '../assets/nav-icon2.svg'
import gh_icon from '../assets/github.png'
import cv from '../my_cv.pdf'
import { motion } from "framer-motion"

const Footer = () => {
    
    const resume = `!/`

  return (
    <Flex borderTop={'1px solid #333'} alignItems={'center'} justifyContent={'space-between'} py={'15px'} px={'5%'}>    
        <Flex alignItems={'center'} >
        <Text fontSize={{base: '9px',md: '14px',lg: '15px'}} color={'#fff'} me={'5%'}>
            waiyan2015.wy65@gmail.com
        </Text> 
            <motion.div initial={{ background: 'black'}} whileHover={{ border: '1px solid gold',color: 'gold',scale: 1.1}}  >
            <Box px={'5px'} py={'2px'} bg={'black'} border={'1px solid gold'} color={'#fff'}>
                <a href={cv} download={true} >
                    <Flex fontSize={{base: '10px',md: '14px'}} alignItems={'center'}>
                        <span className='test' >RESUME</span>
                        <motion.div  animate={{opacity: [0,1,0]}} transition={{ duration: 1,repeat: Infinity}} >
                                    <span className='test' style={{marginLeft: '4px'}}>\{resume}</span>
                        </motion.div>
                    </Flex>
                </a>
            </Box>
            </motion.div>
        </Flex >
        <Flex alignItems={'center'}  >
            <motion.button style={{marginRight: '20px'}} whileHover={{ border: '1px solid #fff',borderRadius: '50%'}}>
            <a href="https://www.facebook.com/profile.php?id=100085960984573"><Image w={{base: '19px',md: '23px',lg: '24px'}} m={'5px'} borderRadius={'50%'} src={fb_icon} alt="Icon" /></a>
            </motion.button>
            <motion.button  whileHover={{ border: '1px solid #fff',borderRadius: '50%'}}>
            <a href="https://www.facebook.com/profile.php?id=100085960984573"><Image m={'5px'} borderRadius={'50%'} w={{base: '20px',md: '24px',lg: '25px'}}  src={gh_icon} alt="Icon" /></a>
            </motion.button>
        </Flex>
    </Flex>
  )
}

export default Footer