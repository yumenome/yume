import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion"


const Path = () => {
  return (
        <Flex mt={'15px'} w={'100%'} px={{lg: '10%',base: '2%'}} flexDirection={'column'} alignItems={'center'} textColor={'white'} >
                <Flex flexDirection={'column'} >

                    <Box display={'flex'} bg={'transparent'} w={'50%'} >
                        <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0,x: -100 }} whileInView={{ opacity: 1,x: 1 }} bg={'#fff'} w={'300px'} >
                                <Box w={'100%'} borderRight={'2px solid #fff'}  borderTop={'2px solid #ccc'}  padding={'7px'}>
                                    <Text textAlign={'right'} fontSize={{base: '14px',md: '15px',lg: '16px'}} fontWeight={'bold'} borderBottom={'1px dashed #ccc'} pb={'7px'} >HTML, CSS & JS: 4_months</Text>
                                    <Text  fontSize={{base: '12px',md: '14px',lg: '16px'}}   _hover={{textAlign: 'left'}} textAlign={'right'}>
                                        I begun programming basic class at 2.2.2023 in Fairywary Technology, I learnt java fundamentals to build a strong foundation in programming logic and syntax.And then self studied HTML,CSS and JAVASCRIPT with Msquare Programming
                                    </Text>
                                </Box>
                        </motion.div>
                    </Box>

                    <Box bg={'transparent'} w={'50%'}  >
                    <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1,x: ['200%','100%'] }} bg={'#fff'} w={'300px'} >
                        <Box w={'100%'} borderLeft={'2px solid #fff'} padding={'7px'} borderTop={'2px solid #ccc'}>
                             <Text  fontSize={{base: '14px',md: '15px',lg: '16px'}} fontWeight={'bold'} borderBottom={'1px dashed #ccc'} pb={'7px'} >PHP, MYSQL & LARAVEL: 3_months</Text>
                            <Text  fontSize={{base: '12px',md: '14px',lg: '16px'}} >
                                When I felt enough with basic, I started Professional Programming class at Fairway Techonology with Sr.Ei Maung. I created alot of mini projects with js, php and mysql. And then I found Laravel that was a significant step forward....
                            </Text>
                        </Box>
                        </motion.div>
                    </Box>

                    <Box display={'flex'} bg={'transparent'} w={'50%'} >
                        <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0,x: -100 }} whileInView={{ opacity: 1,x: 1 }} bg={'#fff'} w={'300px'} >
                                <Box w={'100%'} borderRight={'2px solid #fff'}  borderTop={'2px solid #ccc'}  padding={'7px'}>
                                    <Text textAlign={'right'} fontSize={{base: '14px',md: '15px',lg: '16px'}} fontWeight={'bold'} borderBottom={'1px dashed #ccc'} pb={'7px'} >LIVEWIRE, FILAMENT & REACT: 4_months </Text>
                                    <Text  fontSize={{base: '12px',md: '14px',lg: '16px'}}  _hover={{textAlign: 'left'}} textAlign={'right'}>
                                    After completing a Laravel project in class, I realized there's much more to learn.So I began exploring Livewire and Filament . However, I didn't want to overlook JavaScript, so I self-studied React. This combination greatly enhanced my understanding of full-stack development alongside Laravel APIs.
                                    </Text>
                                </Box>
                        </motion.div>
                    </Box>

                    <Box bg={'transparent'} w={'50%'} >
                    <motion.div transition={{ duration: 0.5 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1,x: ['200%','100%'] }} bg={'#fff'} w={'300px'} >
                        <Box w={'100%'} borderLeft={'2px solid #fff'} padding={'7px'} borderTop={'2px solid #ccc'}>
                             <Text   fontSize={{base: '14px',md: '15px',lg: '16px'}} fontWeight={'bold'} borderBottom={'1px dashed #ccc'} pb={'7px'} >FREELEANCE WITH LARAVEL: 3_months</Text>
                            <Text  fontSize={{base: '12px',md: '14px',lg: '16px'}} >
                            My basic knowledge of React helped me secure my first job. I successfully passed a code test project using React, Axios, and Laravel APIs. While I'm primarily focused on APIs now,  I'm making sure to keep up with Livewire and Filament to maintain a diverse skill set.
                            </Text>
                        </Box>
                        </motion.div>
                    </Box>

                   
                </Flex>
        </Flex>
  )
}

export default Path