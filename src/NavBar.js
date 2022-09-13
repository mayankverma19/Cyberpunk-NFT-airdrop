import { React } from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";

import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    // console.log("window.ethereum", window.ethereum);
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      // console.log('accounts', accounts, '=====');
      setAccounts(accounts);
    }
  }

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* Left Side -- Social Media Icons */}
      <Flex justify="space-around" width="40%" padding="0 75px">
        
        <Link href="https://www.linkedin.com/in/basilisk111/">
          <Image src="https://icon-icons.com/icon/linkedin-pixel-logo/181925" boxSize="42px" margin="0 15px"></Image>
        </Link>
        <Link href="mailto:lit2019038@iiitl.ac.in">
          <Image src={Email} boxSize="42px" margin="0 15px"></Image>
        </Link>
      </Flex>
      {/* Right Side - Sections AND Connect */}
      <Flex
        justify="space-around"
        align="center"
        width="40%"
        padding="30px 30px 30px 30px"
      >
        <Box margin="0 15px">About</Box>
        <Spacer />
        <Box margin="0 15px">Mint</Box>
        <Spacer />
        <Box margin="0 15px">Team</Box>
        <Spacer />

        {/* Connect */}
        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
          backgroundColor="#D6517D"
          borderRadius="5px"
          boxShadow="0px 2px 2px 1px #0F0F0F"
          color="white"
          cursor="pointer"
          fontFamily="inherit"
          padding="15px"
          margin="0 15px"
          onClick={connectAccount}>Connect</Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
