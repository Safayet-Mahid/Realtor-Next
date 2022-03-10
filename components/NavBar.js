import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import Link from "next/link"
import { FcMenu, FcHome, FcAbout } from "react-icons/fc"
import { BsSearch } from "react-icons/bs"
import { FiKey } from "react-icons/fi"

const NavBar = () => {
    return (
        <Flex p="2" borderBottom="1px" borderColor="gray.100" justifyContent="space-between">
            <Box fontSize="3xl" fontWeight="bold" color="blue.400">
                <Link href="/"> Realtor</Link>
            </Box>
            <Box>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />}></MenuButton>
                    <MenuList>
                        <Link href="/" passHref>
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search" passHref>
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>

        </Flex>
    );
};

export default NavBar;