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
  <Layout title="Pikasso">
    <Container>
      <Title>
        Pikasso <Badge>2022-</Badge>
      </Title>
      <P>
        Pikasso is a platform where artists and digital creators can confidently express themselves by
        entering new markets.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pikasso.xyz/">
            https://pikasso.xyz/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>Next.js 12, Typescript, TailwindCSS, RESTful API, NextAuth, Headless UI, SWR, Turborepo</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>10+ (4 frontend developers)</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My work in this project</Center>
      </Heading>

      <Heading as="h5" fontSize={14} my={4}>
          Creator Dashboard
      </Heading>

      <WorkImage src="/images/works/pikasso_02.png" alt="Pikasso" />

      <UnorderedList my={4}>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Implement Responsive UI Features</Badge>
          <span>
            and integrate with backend API to build a dashboard for creators to manage their products, payments, etc.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>E2E testing</Badge>
          <span>
            using Cypress to test UI features
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>SWR caching</Badge>
          <span>
            to cache API response and improve performance
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Stripe integration</Badge>
          <span>
            to handle payment flow & subscription
          </span>
        </ListItem>
      </UnorderedList>

      <Heading as="h5" fontSize={14} my={4}>
          Marketplace
      </Heading>

      <WorkImage src="/images/works/pikasso_01.png" alt="Pikasso" />

      <UnorderedList my={4}>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Atomic design</Badge>
          <span>
            applied into building UI components to reuse components efficiently
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Turborepo</Badge>
          <span>
            Manage configs, design system and apply for all web projects in one repository
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Pixel-perfect</Badge>
          <span>
            and responsive UI design for most devices
          </span>
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
