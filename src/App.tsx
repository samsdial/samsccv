// Import our custom CSS
import Footer from './index/Footer';
//import './assets/scss/styles.scss'
import "./assets/scss/laapp.scss";
import DefaultNavbar from './components/Navbars/DefaultNavbar';
import Heading from './index/content/Heading';
import Partners from './index/content/Partners';
import PersonalInfo from './index/content/PersonalInfo';
import Portfolio from './index/content/Portfolio';
import SkillSet from './index/content/SkillSet';
//import "./assets/scss/demo.scss";.png

function App() {
  return (
    <>
      <DefaultNavbar useOnlyDarkLogo={true} />
      <main>
        <Heading />
        <Partners />
        <PersonalInfo />
        <SkillSet />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default App
