import {Box,HStack,Image,Text, Spacer,Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react"
import {TriangleDownIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom"


export const Navbar=()=>{
    return (
        <Box p='6' position={'sticky'} style={{zIndex: 9999999,top: "1px"}} rounded='md' bg='white' shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' borderColor='grey.900' height={66}  color='white'>
          <HStack pt={7}  h='100%' w="99%" >
           <Link to='/'><Image ml={'-66px'} mr={'-66px'}  w='88%'  align="center" src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw"></Image></Link> 
            <Link to='/courses'><Text textDecoration={'none'} color="grey" pl="22px" >Online Courses</Text></Link>
            <Link to='/in_progess' ><Text pl="22px" color="grey" ml={22} >My Learning Plan</Text></Link>
            <Text pl="22px" color="grey" ml={22}>Certification</Text>
            <Text pl="22px" color="grey" mt={9}>Live Training</Text>
            <Text pl="22px" color="grey" ml="22px">Remote Working</Text>
            <Menu>
            <MenuButton
                px={22}
                bg="white"
                color="gray"
                border="0"
                position="relative"
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'white' }}
                _expanded={{ bg: 'white' }}
                fontSize='16px'
            >
                More <TriangleDownIcon />
            </MenuButton>
            <MenuList w='222px' bg='white' shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'>
                <MenuItem pl={22} pt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Tools & Resources</MenuItem>
                <MenuItem pl={22} mt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Help & FAQ's</MenuItem>
                <MenuItem pl={22} pb={22} mt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Feedback</MenuItem>
            </MenuList>
            </Menu>
            <Spacer/>
            <Link to='/sign-in'><Text textDecoration={'none'} pr="22px" fontWeight='633' color="blue">Sign In</Text></Link>
            <Link to='/register' ><Button h="44px" pl={25}  pr={25} border="0" fontSize="17px" color="white" bg="blue" position={'sticky'} mt={-7}><Text textDecoration={'none'}>Register</Text></Button></Link> 
          </HStack>
          
        </Box>
    )
}