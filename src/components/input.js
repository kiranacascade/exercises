import { 
    Table, TableContainer, TableCaption, Thead, Tbody, Th, Tr, Td, Flex, Button 
} from "@chakra-ui/react";

if(JSON.parse(localStorage.getItem('nameList')) === undefined) {
    localStorage.setItem("nameList", JSON.stringify([]));
}

function Input() {

    function buttonHandler(button, name) {
        const nameList = JSON.parse(localStorage.getItem("nameList"));
        if (button === 'add' && !nameList.includes(name)) {
            nameList.push(name);
            localStorage.setItem("nameList", JSON.stringify(nameList))
        } else if (button === 'delete' && nameList.includes(name)) {
            const index = nameList.indexOf(name);
            nameList.splice(index, 1);
            localStorage.setItem("nameList", JSON.stringify(nameList))
        }
        
    }
    
    const nameList = ["Olivia", "Ethan", "Karina", "Jay", "Jake"]
    const nameToAdd = nameList.map((name) => {
        return(
            <Tr>
                <Td textAlign='center'>{name}</Td>
                <Td textAlign='center'>
                    <Button onClick={() => buttonHandler('add', name)} colorScheme='green'>Add</Button>
                </Td>
                <Td textAlign='center'>
                    <Button colorScheme='red' onClick={() => buttonHandler('delete', name)}>Delete</Button>
                </Td>
            </Tr>
        )
    })

    return(
        <div>
        <Flex alignContent='center' justifyContent='center'>    
            <TableContainer width='500px'>
                <Table variant='simple'>
                    <TableCaption>This is Input page</TableCaption>
                    <Thead>
                    <Tr>
                        <Th textAlign='center'>NAME</Th>
                        <Th textAlign='center'>ADD</Th>
                        <Th textAlign='center'>DELETE</Th>
                    </Tr>
                    </Thead>

                    <Tbody>
                    {nameToAdd}
                    
                    </Tbody>
                    
                </Table>
            </TableContainer>
        </Flex>
        </div>
    )
}

export default Input;