import { CallToAction } from './components/CallToAction/CallToAction.jsx'
import { Goals } from './components/Goals/Goals.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Layout } from './layout/Layout.jsx'

export default function App () {
  return (
    <>
      <Layout>
        <Hero />
        <Goals />
        <CallToAction />
      </Layout>
    </>
  )
}
