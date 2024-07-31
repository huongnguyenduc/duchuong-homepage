import {AspectRatio, Badge, Center, Container, Heading, Link, List, ListItem, UnorderedList} from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import {Meta, Title} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HeyDevs">
    <Container>
      <Title>
        Pulsely <Badge>2022</Badge>
      </Title>
      <P>
        Pulsely is a tool that allows companies to capture insights in all aspects and quickly take action.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://pulsely.geekup.vn/">
            https://pulsely.geekup.vn/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App / <Link href="https://apps.apple.com/vn/app/pulsely-capture-change-signal/id1577072157">
            iOS
          </Link> / <Link href="https://play.google.com/store/apps/details?id=vn.geekup.pulsely&pcampaignid=web_share">
            Android
          </Link></span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>ReactJs, Ant Design, DvaJs</span>
        </ListItem>
        <ListItem>
          <Meta>Team Size</Meta>
          <span>13+ (4 frontend developers)</span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
            src="https://file.notion.so/f/f/9fc3d4fc-5ad6-4cdb-8ba1-b6e68108a9dc/42925df4-c723-480c-859c-0a2863848e91/Product_Sharing.mp4?id=bfc33ace-b5a0-402e-8ad9-fed4a2e8a852&table=block&spaceId=9fc3d4fc-5ad6-4cdb-8ba1-b6e68108a9dc&expirationTimestamp=1722405600000&signature=94Uv8t-CF1ET8v6kmM2NpRh6sTfdoZOWltwRNGdVVCQ&downloadName=Product_Sharing.mp4"
            title="Notion video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
      </AspectRatio>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>My work in this project</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          Participated in a full product development process within 10 weeks, building a fully functional product from scratch.
        </ListItem>

        <ListItem>
          Worked in an Agile team, participating in every meeting and process.
        </ListItem>

        <ListItem>
          Picked up user stories, analyzed, designed, discussed with the team to tackle them, and wrote documentation to clarify my work.
        </ListItem>

        <ListItem>
          Conducted peer reviews to help teammates improve code quality and verify dependencies and system correctness.
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
