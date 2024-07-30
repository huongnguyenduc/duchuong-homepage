import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio, Heading, Center, UnorderedList
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Scalar">
    <Container>
      <Title>
        Scalar <Badge>2023-2024</Badge>
      </Title>
      <P>
        The most performant EVM and Move compatible, high throughput, interoperable smart contract platform in the space ever seen to date
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://scalar.org/">
            https://scalar.org/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Layer-1 Blockchain</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Rust, Golang, DAG-based consensus, etc.</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>5+</span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
            src="https://www.youtube.com/embed/OO4BN1Eol7g?si=Q9tZgwXVsSFxAVDW"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </AspectRatio>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My role in this project</Center>
      </Heading>

      <Heading as="h5" fontSize={14} my={4}>
          Blockchain Developer
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Adapt new techs</Badge>
          <span>
            Learn Rust, Golang, Ethereum architecture and DAG-based consensus algorithm to build a high-performance blockchain platform where EVM and Move are compatible.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Explore Open-Sources</Badge>
          <span>
            Learn & work with multiple open-source projects to build a blockchain platform, including <Link
              target="_blank"
              href="https://github.com/paradigmxyz/reth"
          >Reth</Link>, <Link
              target="_blank"
              href="https://sui.io/"
          >Sui</Link>, <Link
              target="_blank"
              href="https://cometbft.com/"
          >CometBFT</Link>, <Link
              target="_blank"
              href="https://docs.cosmos.network/"
          >Cosmos SDK</Link>-based blockchain: <Link
              target="_blank"
              href="https://evmos.org/"
          >Evmos</Link>, <Link
              target="_blank"
              href="https://babylonchain.io/"
          >Babylonchain</Link>, <Link
              target="_blank"
              href="https://www.axelar.network/"
          >Axelarnetwork</Link>, etc.
          </span>
        </ListItem>

        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Design decision</Badge>
          <span>
            Propose and implement new features, design decisions to improve the platform&apos;s performance, security, and interoperability.
          </span>
        </ListItem>
        <ListItem>
          <Badge textTransform={"capitalize"} mr={2}>Deploy & Testing</Badge>
          <span>
            Dockerize the platform, write tests, and deploy to local node for testing and demo.
          </span>
        </ListItem>
      </UnorderedList>

      <Heading as="h5" fontSize={14} my={4}>
        Frontend Developer -{" "}
        <Link
            target="_blank"
            href="https://scalar.org/"
        >
          Landing Page
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
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
