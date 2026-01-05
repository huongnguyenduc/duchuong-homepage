import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTelegram,
  IoMail,
  IoDownload,
  IoEye
} from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Software Engineer based in Vietnam!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Duc-Huong Nguyen
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/huong.webp"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Huong is a Software Engineer based in Vietnam with a passion for
            building digital products/stuff that user needs. He has a knack for
            turning design into web app to end-user, solving real-life problems
            with code. When not online, he loves hanging out with his books and
            learn something new about everything.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
          <Box
            align="center"
            my={4}
            display="flex"
            gap={4}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Button
              onClick={onOpen}
              rightIcon={<IoEye />}
              colorScheme="teal"
              variant="outline"
            >
              View my resume
            </Button>
            <Button
              onClick={() => {
                const link = document.createElement('a')
                link.href = '/DucHuong_SoftwareEngineer.pdf'
                link.download = 'DucHuong_SoftwareEngineer.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              rightIcon={<IoDownload />}
              colorScheme="teal"
            >
              Download my resume
            </Button>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <Box
                as="iframe"
                src="/DucHuong_SoftwareEngineer.pdf"
                width="100%"
                height="100%"
                minH="100vh"
                border="none"
              />
            </ModalContent>
          </Modal>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Podcast, Books, Science, Technology, Photography, Badminton
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/huongnguyenduc" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @huongnguyenduc
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/duchuongnguyen" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTelegram />}
                >
                  @duchuongnguyen
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/duchuongnguyen/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @duchuongnguyen
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/duchuong007" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @duchuong007
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:duchuong007@gmal.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMail />}
                >
                  duchuong007@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
