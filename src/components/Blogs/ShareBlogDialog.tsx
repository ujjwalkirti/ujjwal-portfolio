"use client";

import { config } from "@/lib/config";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Input, useClipboard, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

interface ShareBlogDialogProps {
	open: boolean;
	handleClose: () => void;
	slug: string;
}

function ShareBlogDialog({ open, handleClose, slug }: ShareBlogDialogProps) {
	const shareUrl = `${config.baseUrl}/blog/${slug}`;
	const { onCopy, hasCopied, setValue } = useClipboard(shareUrl);
	const toast = useToast();

	useEffect(() => {
		setValue(shareUrl);
	}, [shareUrl, setValue]);

	const handleCopy = () => {
		onCopy();
		toast({
			title: "Copied!",
			description: "Blog link has been copied to clipboard.",
			status: "success",
			duration: 2000,
			isClosable: true,
		});
		handleClose();
	};

	return (
		<Modal isOpen={open} onClose={handleClose} isCentered>
			<ModalOverlay />
			<ModalContent borderRadius="md" p={4}>
				<ModalHeader fontWeight="bold">Share this blog</ModalHeader>
				<ModalBody>
					<Input value={shareUrl} isReadOnly variant="outline" />
				</ModalBody>
				<ModalFooter display="flex" gap={3}>
					<Button onClick={handleClose} variant="ghost" colorScheme="gray">
						Cancel
					</Button>
					<Button
						onClick={handleCopy}
						bg="#21bdfe"
						color="white"
						fontSize="1.05rem"
						fontWeight="600"
						textTransform="none"
						position="relative"
						overflow="hidden"
						_hover={{ bg: "#1ca8e4" }}
						_after={{
							content: `""`,
							position: "absolute",
							top: "-50%",
							left: "-50%",
							width: "200%",
							height: "200%",
							background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
							transform: "rotate(45deg)",
							animation: "shine 3s infinite",
						}}
					>
						Copy Link
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default ShareBlogDialog;
