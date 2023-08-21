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
  <Layout title="Ecommerce Store">
    <Container>
      <Title>
        Ecommerce Store <Badge>2023</Badge>
      </Title>
      <P>
        A simple full-stack e-commerce web app in both Dashboard & CMS to learn about building a full-stack web app.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://devlabs-ecommerce-admin.vercel.app">
            Admin Dashboard <ExternalLinkIcon mx="2px" />
          </Link>
          {' '}
          <Link href="https://devlabs-ecommerce-store.vercel.app">
            E-commerce Store <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>Next.js 13, TailwindCSS, Radix UI, Turborepo, Prisma, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>1</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My work in this project</Center>
      </Heading>

      <WorkImage src="/images/works/ecommerce-store.png" alt="Ecommerce Store" />

      <UnorderedList my={4}>
        <ListItem>
          Setting up projects, code styling, UI components with Radix UI and using them across projects thanks to Turborepo.
        </ListItem>

        <ListItem>
          Handle payment flow with Stripe on both the client and the server side.
        </ListItem>

        <ListItem>
          Use Prisma as ORM to implement a simple backend within Next.js
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/ecommerce-store_01.png" alt="Ecommerce Store" />
      <WorkImage src="/images/works/ecommerce-store_02.png" alt="Ecommerce Store" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
