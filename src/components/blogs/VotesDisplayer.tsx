import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
type props = {
  upvotes: number;
  downvotes: number;
};
function VotesDisplayer({ upvotes, downvotes }: props) {
  return (
    <HStack className="text-2xl flex justify-end space-x-5 w-full p-3">
      <Box className="flex items-center gap-2">
        <AiOutlineLike className="hover:animate-pulse cursor-pointer" />
        {upvotes}
      </Box>
      <Box className="flex items-center gap-2">
        <AiOutlineDislike />
        {downvotes}
      </Box>
    </HStack>
  );
}

export default VotesDisplayer;
