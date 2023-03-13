import { Flex, Table, TableContainer, TableCaption, Thead, Tbody, Th, Tr, Td } from "@chakra-ui/react";

function Lists() {

//     const nameList = JSON.parse(localStorage.getItem("nameList"))
//   const addedName = nameList.map((el, index) => {
//     return (
//       <Tr>
//         <Td>{index + 1}</Td>
//         <Td>{el}</Td>
//       </Tr>
//     )
//   })

    const nameList = JSON.parse(localStorage.getItem("nameList"));
    console.log(nameList)
    const nameAdded = nameList.map((name) => {
        return (
            <Tr>
                <Td textAlign='center'>{name}</Td>
            </Tr>
        )
    })

    return(
        <div>
            <Flex alignContent='center' justifyContent='center'>    
            <TableContainer width='500px'>
                <Table variant='simple'>
                    <TableCaption>This is List page</TableCaption>
                    {/* Table HEAD starts here */}
                    <Thead>
                    <Tr>
                        <Th textAlign='center'>NAME ADDED</Th>
                    </Tr>
                    </Thead>
                    {/* Table BODY starts here */}
                    <Tbody>
                        {nameAdded}
                    </Tbody>
                    
                </Table>
            </TableContainer>
        </Flex>
        </div>
    )
}

export default Lists;