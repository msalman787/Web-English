import About from './components/About/About.jsx'
import { CallToAction } from './components/CallToAction/CallToAction.jsx'
import { Goals } from './components/Goals/Goals.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Marquee } from './components/Marquee/Marquee.jsx'
import { Plans } from './components/Plans/Plans.jsx'
import { Stages } from './components/Stages/Stages.jsx'
import { UserStories } from './components/UserStories/UserStories.jsx'
import { Layout } from './layout/Layout.jsx'

export default function App () {
  return (
    <>
      <Marquee />
      <Layout>
        <Hero />
        <Goals />
        <CallToAction />
        <Stages />
        <About />
        <UserStories />
        <Plans />
      </Layout>
    </>
  )
}
