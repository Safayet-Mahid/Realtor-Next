import React from 'react';
import Link from "next/link"
import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import defaultImage from "../assets/house.jpg"
import { GoVerified } from 'react-icons/go';
import { FaBath, FaBed } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import millify from 'millify';

const Property = ({ property: { title, coverPhoto, externalID, isVerified, price, rentFrequency, rooms, baths, agency, area } }) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer'>
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url : defaultImage} width={400} height={260} alt="house" />
                </Box>
                <Box w="full">
                    <Flex alignItems="center" paddingTop="2" justifyContent="space-between">
                        <Flex alignItems="center">
                            <Box color="green.400" paddingRight='3' > {isVerified && <GoVerified />} </Box>
                            <Text fontWeight="bold" fontSize="lg"> AED {millify(price)} {rentFrequency && `/${rentFrequency}`} </Text>
                        </Flex>
                        <Box>
                            <Avatar size="sm" src={agency?.logo?.url}></Avatar>
                        </Box>
                    </Flex>
                    <Flex alignItems="center" p='1' justifyContent="space-between" color="blue.400" w="250px">
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize="lg" >
                        {title.length > 30 ? title.substring(0, 30) + "..." : title}
                    </Text>

                </Box>
            </Flex >

        </Link >
    );
};

export default Property;