import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import gim from '../assets/projects/gim.png'
import pokemon from '../assets/projects/pokemon.png'
import ig from '../assets/projects/ig.png'
import idea from '../assets/projects/idea.png'
import letmecheck from '../assets/projects/letmecheck.png'
import utude from '../assets/projects/utude.png'
import project from '../assets/g2.gif'
import { motion } from "framer-motion"

const Projects = () => {

    const btn = '</>';
    const projects = [
        {
            title: 'U-TUDE CLONE',
            description: "Welcome to my first React project! Leveraging the power of RapidAPI, I've seamlessly integrated YouTube's functionality into my application. Utilizing Axios for efficient data fetching and MUI for sleek CSS design.",
            codes: [ {link: 'https://github.com/yumenome/utude_clone.git'} ],
            img: utude
        },
        {
            title: 'GiM',
            description: "Harnessing the capabilities of RapidAPI, I've seamlessly integrated essential gym functionalities into this application. With the dynamic styling of MUI and efficient data fetching powered by Axios, I've crafted an experience tailored for gym enthusiasts.",
            codes: [ {link: 'https://github.com/yumenome/GiM.git'} ],
            img: gim
        },
        {
            title: 'IG CLONE',
            description: "Presenting my inaugural CSR project: an IG clone. Leveraging Laravel API for the backend and React for the frontend, I've encapsulated the essence of Instagram's user experience. Employing Chakra UI's polished UI components, I've fashioned an interface that closely emulates Instagram's familiar aesthetics.",
            codes: [ {link: 'https://github.com/yumenome/ig_fe.git'}, {link: 'https://github.com/yumenome/ig_be.git'} ],
            img: ig
        },
        {
            title: 'LET ME CHECK',
            description: "Explore detailed phone reviews effortlessly. Powered by Filament Dashboard for backend UI and Chakra UI for frontend design, I've transformed user engagement with reviews. Integrated YouTube videos and professional website reviews empower informed decisions. ",
            codes: [ {link: 'https://github.com/yumenome/let_meCheck-fe.git'}, {link: 'https://github.com/yumenome/let_meCheck-be.git'} ],
            img: letmecheck
        },
        {
            title: 'POKEMON',
            description: "Welcome to the unveiling of my innovative Pokémon Card project! Immerse yourself in a world where Laravel API, React, and advanced JavaScript logics converge to redefine the trading experience for Pokémon cards with Complemented by Chakra UI for frontend design, this platform reinvents the buying and selling of Pokémon cards.",
            codes: [ {link: 'https://github.com/yumenome/pokemon_fe.git'}, {link: 'https://github.com/yumenome/pokemon_be.git'} ],
            img: pokemon
        },
        {
            title: 'IDEAS',
            description: "Welcome to IDEAS, the Social Platform SSR project! Crafted primarily with Laravel and Bootstrap for CSS styling, IDEA represents a new frontier in social networking. With server-side rendering at its core, this platform offers seamless performance and dynamic user experiences.",
            codes: [ {link: 'https://github.com/yumenome/idea.git'} ],
            img: idea
        }
    ]

  return (
    <Flex id='projects' flexDirection={'column'} mb={{lg: '-70px',md: '-70px',base: 0}} mt={'-200px'}  p={'10%'}>

        <Flex alignItems={'center'} ms={'20px'} mt={{base: '50px',lg: 0,md: '10px'}}  justifyContent={'center'}>
            <Text zIndex={'2'} me={'-20px'} className='test' fontSize={{base: '30px',lg: '48px'}} fontWeight={'bold'} textAlign={'center'} color={'black'} >
                PROjECTS
            </Text>
            <Image src={project} w={'120px'} />
        </Flex>

        <Flex flexDirection={'column'} pb={'5%'} mt={'-10px'} className='projects'>
            {projects.map((project,i) => (
                <Flex key={i} pt={'5%'} px={'5%'} pb={'20px'} borderBottom={'1px solid #333'} flexDirection={{lg: 'row',md: 'column',base: 'column'}}>
                  <Image src={project.img} w={{lg: '330px',md: '400px',base: '300px'}} />
                  <Flex ms={{lg: '20px'}} flexDirection={'column'}>
                      <Flex  mt={{base: '20px'}} alignItems={'center'} mb={'10px'} >
                          <Text color={'#fff'} fontWeight={'bold'} fontSize={{base: '16px',md: '20px',lg: '22px'}} >
                              {project.title}
                          </Text>
                          {project.codes.map((code,i) => (
                            <Box key={i}>
                                {/* lg */}
                                <Box me={'20px'} display={{base: 'none',lg: 'block',md: 'none'}}>
                                    <motion.button style={{padding: '2px'}} whileHover={{background: '#fff', color: 'black',borderRadius: '50%'}} initial={{ x: 0 }} whileInView={{ x: 400, rotate: 360,background: 'black',border: '1px solid #eee',color: '#fff' }} transition={{ duration: 0.7 }}>
                                    <a href={code.link}>{btn}</a>
                                    </motion.button>
                                </Box>
                                {/* md  */}
                                <Box me={'15px'} display={{base: 'none',lg: 'none',md: 'block'}}>
                                    <motion.button style={{borderRadius: '10%',padding: '2px'}} whileHover={{background: '#fff', color: 'black',borderRadius: '50%'}} initial={{ x: 0 }} whileInView={{ x: 300, rotate: 360,background: 'black',border: '1px solid #eee',color: '#fff' }} transition={{ duration: 0.5 }}>
                                    <a href={code.link}>{btn}</a>
                                    </motion.button>
                                </Box>
                                {/* base  */}
                                <Box me={'5px'} display={{base: 'block',lg: 'none',md: 'none'}}>
                                    <motion.button style={{borderRadius: '10%',padding: '2px'}} whileHover={{background: '#fff', color: 'black',borderRadius: '50%'}} initial={{ x: 0 }} whileInView={{ x: 100, rotate: 360,background: 'black',border: '1px solid #eee',color: '#fff' }} transition={{ duration: 0.5 }}>
                                    <a href={code.link}>{btn}</a>
                                    </motion.button>
                                </Box>
                            </Box>
                          ))}
                      </Flex>
                      <Text color={'#fff'} fontSize={{base: '12px',md: '14px',lg: '16px'}}>
                          {project.description}
                      </Text>
                  </Flex>
              </Flex>
            ))}
           
        </Flex>
    </Flex>
  )
}

export default Projects