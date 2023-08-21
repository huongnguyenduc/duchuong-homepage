import { Box } from '@chakra-ui/react'
import Link from "next/link";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
        This website is built based on the <Link styles={{textDecoration: "underline"}} href='https://www.craftz.dog/' target='_blank'>Takuya Matsuyama's website</Link>.
    </Box>
  )
}

export default Footer
