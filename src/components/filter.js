import {useState} from 'react';
import { VStack, InputLeftAddon, Input, InputGroup, Center, Container } from "@chakra-ui/react";

function Filter() {
    const fruits = ["Banana", "Watermelon", "Mango", "Peach", "Orange", "Lychee", "Apple", "Melon", "Pear", "Grape", "Pineapple"]

    const [buah, setBuah] = useState('');

    const fruitsList = fruits.filter((fruit) => fruit.toLowerCase().includes(buah)).map((fruit) => {
        return (
            <Center w='200px' h='40px' bg='gray.100'>
                {fruit}
            </Center>
        )
    })

    return (
        <Container w='500px' justifyContent='center' p='40px'>
            <VStack spacing='20px'>
                <InputGroup>
                    <InputLeftAddon children='Search' />
                    <Input type='text' placeholder='type fruit here' onChange={(e) => setBuah(e.target.value.toLowerCase())} />
                </InputGroup>

                {fruitsList}

            </VStack>
        </Container>
    )
}

export default Filter;