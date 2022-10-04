import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Angelo Filho</Text>
          <Text color="gray.300" fontSize="small">
            angelo.filho06@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Angelo Filho"
        src="https://github.com/angelo-filho.png"
      />
    </Flex>
  );
}
