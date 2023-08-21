import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio, Heading, Center, UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HeyDevs">
    <Container>
      <Title>
        HeyDevs <Badge>2023-</Badge>
      </Title>
      <P>
        HeyDevs is the first active sourcing job platform that let companies apply directly to developers.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://heydevs.io/">
            https://heydevs.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App / <Link href="https://apps.apple.com/us/app/heydevs/id6450045491">
            iOS
          </Link> / <Link href="https://play.google.com/store/apps/details?id=io.heydevs.app">
            Android
          </Link></span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>Next.js 13, Typescript, TailwindCSS, GraphQL, NextAuth, Radix UI, Turborepo</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>10+ (4 frontend developers)</span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
            src="https://www.youtube.com/embed/dUCzePfsgaM?controls=0&autoplay=1&mute=1&playsinline=1&loop=1&showinfo=0&playlist=dUCzePfsgaM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </AspectRatio>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My work in this project</Center>
      </Heading>

      <Heading as="h5" fontSize={14} my={4}>
          Company {' '}
          <Link
              target="_blank"
              href="https://app.heydevs.io/auth/company/login"
          >
            Web App
          </Link>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Implement UI Features</Badge>
          <span>
            for the company dashboard
          </span>
          <WorkImage src="/images/works/heydevs_02.png" alt="HeyDevs" />
          <WorkImage src="/images/works/heydevs_05.png" alt="HeyDevs" />
          <span>
           Manage forms via React Hook Form & Zod
          </span>
          <WorkImage src="/images/works/heydevs_03.png" alt="HeyDevs" />

        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Drag&apos;n&apos;Drop</Badge>
          <span>
            Work with <code>React Beautiful dnd</code> library to build interaction behaviors & kanban board
          </span>
          <WorkImage src="/images/works/heydevs_04.png" alt="HeyDevs" />
          <WorkImage src="/images/works/heydevs_01.png" alt="HeyDevs" />
        </ListItem>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Stripe integrated</Badge>
          <span>
            Stripe integrated for payment flow
          </span>
          <WorkImage src="/images/works/heydevs_06.png" alt="HeyDevs" />
        </ListItem>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Up-to-date technology</Badge>
          <span>
            Take advantage of new React hooks, React Server component to build dynamic routers, tabs layout and optimize web app&apos;s data fetching & rendering cost.
          </span>
        </ListItem>
      </UnorderedList>

      <Heading as="h5" fontSize={14} my={4}>
        <Link
            target="_blank"
            href="https://heydevs.io/"
        >
          Landing Page & Blog
        </Link>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Self-managed</Badge>
          <span>
            implement UI Pages and deploy to Vercel
          </span>
        </ListItem>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>UI into Website</Badge>
          <span>
            Work closely with UI designer to implement UI, animations, interactions
          </span>
        </ListItem>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>SEO</Badge>
          <span>
            Optimize SEO, Lighthouse score by using Next.js features: Dynamic Metadata, Image Optimization, building blog static pages, etc.
          </span>
        </ListItem>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Ghost Integration</Badge>
          <span>
            Use Ghost as a headless CMS to manage blog posts, webhooks to trigger on-demand revalidate static pages when new posts are published.
          </span>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
