import {Box,HStack,VStack,Image,Text, Spacer,Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

   
} from "@chakra-ui/react"
import {TriangleDownIcon} from "@chakra-ui/icons"


export const Navbar=()=>{
    return (
        <Box p='6'  rounded='md' bg='white' shadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' borderColor='grey.900' height={55}  color='white'>
          <HStack mr="77px"  h='100%' w="99%" >
            <VStack  w='13%' h='70%' justify="center" align="start" ml={22}>
            <Image w='100%' align="center" src="https://lh3.googleusercontent.com/kvtXWUZ756KishzmjWDgAf0AW77QeBSuLbUXDQidstlS2h63BSRrlgm4bU97NPjdF5skHZFKQufqTqGt1UbTO8VV0OB7SqXAz7qCng=-rw"></Image>
            </VStack>
            <Text color="grey" pl="22px" >Online Courses</Text>
            <Text pl="22px" color="grey" ml={22}>Certification</Text>
            <Text pl="22px" color="grey" mt={9}>Live Training</Text>
            <Text pl="22px" color="grey" ml="22px">Remote Working</Text>
            {/* <Menu>
                <MenuButton _hover={{ bg: 'gray.400' }} _expanded={{ bg: 'blue.400' }}  _focus={{ boxShadow: 'outline' }} 
                    color="grey" pl='22px' pt='5px' bg='white' fontSize='16px' border='0' as={Button}  rightIcon={<TriangleDownIcon />}>
                    More 
                </MenuButton>
                <MenuList w='222px'>
                    <MenuItem pl={22} pt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Tools & Resources</MenuItem>
                    <MenuItem pl={22} mt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Help & FAQ's</MenuItem>
                    <MenuItem pl={22} pb={22} mt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Feedback</MenuItem>
                </MenuList>
            </Menu> */}
            <Menu>
            <MenuButton
                px={4}
                py={2}
                color="grey"
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.900' }}
                _expanded={{ bg: 'blue.900' }}
                _focus={{ boxShadow: 'outline' }}
            >
                File <TriangleDownIcon />
            </MenuButton>
            <MenuList w='222px'>
                <MenuItem>New File</MenuItem>
                <MenuItem>New Window</MenuItem>
                  <MenuItem pl={22} pt='17px'  color='grey' bg='whitesmoke' fontSize={16} fontWeight='200'>Tools & Resources</MenuItem>
                    <MenuItem pl={22} mt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Help & FAQ's</MenuItem>
                    <MenuItem pl={22} pb={22} mt='17px' border='0' color='grey' bg='white' fontSize={16} fontWeight='200'>Feedback</MenuItem>
                <MenuItem>Open...</MenuItem>
                <MenuItem>Save File</MenuItem>
            </MenuList>
            </Menu>
            <Spacer/>
            <Text pr="22px" fontWeight='633' color="blue">Sign In</Text>
            <Button h="80%" pl={25}  pr={25} border="0" fontSize="17px" color="white" bg="blue">Register</Button>
          </HStack>
          
        </Box>
    )
}