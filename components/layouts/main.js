import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelRoomLoader from '../voxel-room-loader'

const LazyVoxelRoom = dynamic(() => import('../voxel-room'), {
  ssr: false,
  loading: () => <VoxelRoomLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Duc Huong's homepage" />
        <meta name="author" content="huongnguyenduc" />
        <meta name="author" content="Duc Huong Nguyen" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Duc Huong - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={24}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
