import Side from '../side/Side'
import Content from '../content/Content'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
        {/* left -  */}
        <Side />
        
        {/* right -  */}
        <Content />
    </div>
  )
}

export default Home