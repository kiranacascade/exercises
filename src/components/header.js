import React from "react";
import { HStack, Box, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";


// import { Link } from "@chakra-ui/react";

function Header() {
    const exercises = [['Counter', '/'], ['Stop Watch', '/stopwatch'], ['Fruit Filter', '/filter'], ['Input', '/input'], ['List', '/list']]

    const menuHeader = exercises.map((exercise) => {
        return (
            <Box>
                <Heading size='md'>
                    <Link to={exercise[1]}>{exercise[0]}</Link>
                </Heading>
            </Box>
        )
    })

    return(

        <HStack bg='tomato' h='60px' color='white' spacing='50px' alignContent='center' justifyContent='center'>

            {menuHeader}
            {/* <Box>
                <Heading size='md'>
                    <Link to='/'>Counter</Link>
                </Heading>
            </Box>
            
            <Box >
                <Heading size='md'>
                    <Link to='/input'>Input</Link>
                </Heading>
            </Box>
            
            <Box >
                <Heading size='md'>
                    <Link to='/list'>List</Link>
                </Heading>
            </Box> */}

        </HStack>
        
    )
}

export default Header;