import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbPulsely from '../public/images/works/pulsely.jpg'
import thumbPikasso from '../public/images/works/pikasso.png'
import thumbHeyDevs from '../public/images/works/heydevs.png'
import thumbBeatonic from '../public/images/works/beatonic.png'
import thumbEcommerceStore from '../public/images/works/ecommerce-store.png'
import thumbGoldenPoint from '../public/images/works/golden-point.png'
import thumbBado from '../public/images/works/bado-landing-page.png'
import thumbScalar from '../public/images/works/scalar.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Company Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="scalar" title="Scalar" thumbnail={thumbScalar}>
            The most performant EVM and Move compatible, high throughput, interoperable smart contract platform in the space ever seen to date
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="heydevs" title="HeyDevs" thumbnail={thumbHeyDevs}>
              HeyDevs is the first active sourcing job platform that let companies apply directly to developers.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="pikasso" title="Pikasso" thumbnail={thumbPikasso}>
            Pikasso is a platform where artists and digital creators can confidently express themselves by
            entering new markets.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="pulsely" title="Pulsely" thumbnail={thumbPulsely}>
            Pulsely is a tool that allows companies to capture insights in all aspects and quickly take action.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Freelance Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="beatonic" thumbnail={thumbBeatonic} title="Beatonic">
            Your one-stop marketplace connecting musicians with top-tier music professionals for hire, revolutionizing music production.
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="golden-point-landing-page" thumbnail={thumbGoldenPoint} title="GP Landing Page">
            An elegant landing page for Golden Point company
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="bado-landing-page" thumbnail={thumbBado} title="Bado Landing Page">
            A simple landing page for Bado company (WIP)
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
            Personal Works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="ecommerce-store" thumbnail={thumbEcommerceStore} title="E-commerce Store">
            A simple full-stack e-commerce web app in both Dashboard & CMS to learn about building a full-stack web app.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
