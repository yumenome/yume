import { Box, Flex, Image, Text } from '@chakra-ui/react'
import skill from '../assets/p3.gif'
import html from '../assets/skills/html.svg'
import css from '../assets/skills/css.svg'
import javascript from '../assets/skills/js.svg'
import mysql from '../assets/skills/mysql.svg'
import github from '../assets/skills/github.svg'
import react from '../assets/skills/react.png'
import chakra from '../assets/skills/chakra.jpg'
import php from '../assets/skills/php.jpg'
import redux from '../assets/skills/redux.svg'
import laravel from '../assets/skills/laravel.svg'
import livewire from '../assets/skills/livewire.svg'
import filament from '../assets/skills/filament.webp'
import { motion } from "framer-motion"


const Skills = () => {

  return (
    <Box w={'full'}>
        <motion.div  initial={{ opacity: 0,y: 0 }} whileInView={{ opacity: 1,y: -99.5 }} transition={{ duration: 1 }}>
        <Flex id='skills' alignItems={'center'}  mt={'150px'} mb={'30px'} justifyContent={'center'}>
        <Text className='test' fontSize={{base: '30px',lg: '48px'}} fontWeight={'bold'} textAlign={'center'} color={'black'} >SkILLS</Text>
        <Image src={skill} w={'70px'} />
        </Flex>

        <Box mb={'30px'} w={{base: '80%',md: '60%',lg: '60%'}} mx={{base: '10%',md: '20%',lg: '20%'}} >

            <Flex bg={'transparent'}  alignItems={'center'} justifyContent={'space-evenly'}>
                
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={html} w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={css} w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={javascript} borderRadius={'10px'} w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={php} borderRadius={'10px'}  w={{lg: '70px',md: '60px', base: '50px'}}  />
                </motion.div>
                
            </Flex>

            <Flex bg={'transparent'} mt={'15px'} alignItems={'center'} justifyContent={'space-evenly'}>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={mysql}  w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={laravel}  w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={livewire} w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} src={filament}  w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
            </Flex>

            <Flex bg={'transparent'} mt={'15px'} alignItems={'center'} justifyContent={'space-evenly'}>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} _hover={{opacity: '1'}} src={github} w={{lg: '70px',md: '60px', base: '50px'}}  />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} _hover={{opacity: '1'}} src={react} w={{lg: '70px',md: '60px', base: '50px'}}  />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} _hover={{opacity: '1'}} borderRadius={'50%'} src={chakra} w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
                <motion.div whileInView={{ rotate: [0, 30, -30, 0] }} whileHover={{ rotate: [-3000, 0] }} transition={{ duration: 0.3 }} >
                    <Image bg={'transparent'} _hover={{opacity: '1'}} src={redux} w={{lg: '70px',md: '60px', base: '50px'}} />
                </motion.div>
            </Flex>
        </Box>

    
    </motion.div>
    </Box>
  )
}

export default Skills