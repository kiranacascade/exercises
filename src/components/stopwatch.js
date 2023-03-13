import { 
    Container, HStack, Center, Text, Stack, Button
 } from "@chakra-ui/react";
import React, { useState } from "react";

function Stopwatch() {
    const [time, setTime] = useState({s:0, m:0, h:0});
    const [interv, setInterv] = useState();

    const start = () => {
        run();
        setInterv(setInterval(run, 1000))
    }

    const stop = () => {
        clearInterval(interv)
    }

    const reset = () => {
        clearInterval(interv)
        setTime({s:0, m:0, h:0})
    }

    var updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if(updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        updatedS++;
        return setTime({ s: updatedS, m: updatedM, h: updatedH})
    }

    return (
        <Container border='1px' borderRadius='md' height='-webkit-fit-content' spacing='50px' mt={10} centerContent>
            <HStack p='50px'>

            <Center w='100px' h='100px' bg='blue.200'>
                <Text fontSize='48px' as='b' color='blue.900'>
                    {(time.h >= 10) ? time.h : "0" + time.h }
                </Text>
            </Center>
            <Text fontSize='48px' as='b' color='blue.900' pb='10px'>:</Text>

            <Center w='100px' h='100px' bg='blue.200'>
                <Text fontSize='48px' as='b' color='blue.900'>
                    {(time.m >= 10) ? time.m : "0" + time.m }
                </Text>
            </Center>
            <Text fontSize='48px' as='b' color='blue.900' pb='10px'>:</Text>

            <Center w='100px' h='100px' bg='blue.200'>
                <Text fontSize='48px' as='b' color='blue.900'>
                    {(time.s >= 10) ? time.s : "0" + time.s }
                </Text>
            </Center>
            </HStack>
            
            <Stack direction='row' spacing={4} align='center' p='50px'>
                <Button size='lg' onClick={start} colorScheme='green'>Start</Button>
                <Button size='lg' onClick={stop} colorScheme='red'>Stop</Button>
                <Button size='lg' onClick={reset} colorScheme='yellow'>Reset</Button>
            </Stack>
        </Container>
    )
}

export default Stopwatch;