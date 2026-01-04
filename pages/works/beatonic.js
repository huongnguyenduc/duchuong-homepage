import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading, Center, UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Beatonic">
    <Container>
      <Title>
        Beatonic <Badge>2023</Badge>
      </Title>
      <P>
        Your one-stop marketplace connecting musicians with top-tier music professionals for hire, revolutionizing music production.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://beatonic-landing.vercel.app/">
            https://beatonic-landing.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App (Work In Progress - WIP)</span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>Next.js 13, Typescript, TailwindCSS, Turborepo, Radix UI, Zustand</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>3</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My work in this project</Center>
      </Heading>

      <P style={{marginBottom: "8px"}}>
        I am working as a solo frontend developer in this project. I am responsible for building the whole frontend, including <Link target="_blank" href="https://beatonic-coming-soon.vercel.app/">
        Coming Soon page <ExternalLinkIcon mx="2px" /></Link>, <Link target="_blank" href="https://beatonic-frontend-web.vercel.app/">
        Beat marketplace (WIP) <ExternalLinkIcon mx="2px" /></Link>, <Link target="_blank" href="https://beatonic-dashboard.vercel.app/content/tracks">
        Beat Dashboard (WIP) <ExternalLinkIcon mx="2px" /></Link> and <Link target="_blank" href="https://beatonic-landing.vercel.app/">Landing Page (WIP)</Link>
      </P>

      <WorkImage src="/images/works/beatonic.webp" alt="beatonic" />

      <WorkImage src="/images/works/beatonic_01.webp" alt="beatonic" />

      <WorkImage src="/images/works/beatonic_02.webp" alt="beatonic" />

      <UnorderedList my={4}>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Source base setting up</Badge>
          <span>
            & evaluate front-end technologies.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Implement UI features</Badge>
          <span>, interaction, deploy in various environment.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Turborepo</Badge>
          <span>
            is used for share configs (prettier, eslint, tsconfig, tailwind config), icons, design system across multiple projects.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Radix UI</Badge>
          <span>
            is used for easily building design system & UI components matching the design.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Browser Audio API</Badge>
          <span>
            to implement playing bar
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Optimization</Badge>
          <span>
            for image, svg to make page load time faster.
          </span>
        </ListItem>

        <ListItem>
          Write clean, maintainable, and reusable code to easily scale the application.
        </ListItem>
      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
