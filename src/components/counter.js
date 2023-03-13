import { Container, Heading, Stack, Button } from "@chakra-ui/react";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <Container centerContent>
            <Heading padding='6'>You clicked {count} times</Heading>
            <Stack direction='row' spacing={4} align='center'>
            <Button onClick={increment} colorScheme='blue'>Increment</Button>
            <Button onClick={decrement} colorScheme='yellow'>Decrement</Button>
            <Button onClick={reset} colorScheme='red'>Reset</Button>
            </Stack>
        </Container>
    )
}

export default Counter;