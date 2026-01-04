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
  <Layout title="Landing Page">
    <Container>
      <Title>
        Landing Page <Badge>2024</Badge>
      </Title>
      <P>

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://www.goldenpointgroup.com.vn/">
            https://www.goldenpointgroup.com.vn/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>Next.js 13, Typescript, TailwindCSS, Radix UI</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>1</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My work in this project</Center>
      </Heading>

      <P style={{marginBottom: "8px"}}>
        I am working as a solo frontend developer in this project. I am responsible for building the whole frontend, from setting up the project, implementing UI features, interaction, deploying in various environments, and optimizing the page load time.
      </P>

      <WorkImage src="/images/works/golden-point.webp" alt="golden-point" />

      <WorkImage src="/images/works/golden-point-1.webp" alt="golden-point" />

      <WorkImage src="/images/works/golden-point-2.webp" alt="golden-point" />

      <WorkImage src="/images/works/golden-point-4.webp" alt="golden-point" />

      <WorkImage src="/images/works/golden-point-3.webp" alt="golden-point" />

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
          <Badge textTransform={"capitalize"} mr={2}>Radix UI</Badge>
          <span>
            is used for easily building design system & UI components matching the design.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Optimization</Badge>
          <span>
            for image, svg to make page load time faster.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Google Sheet-Integrated</Badge>
          <span>
            for collecting data from the form.
          </span>
        </ListItem>
      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
