import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>

            <Box maxWidth="1280px" m="auto">
                <header>
                    <NavBar></NavBar>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </Box>

        </>
    );
};

export default Layout;