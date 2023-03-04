 import Cards from '../cards/Cards';
import './content.scss';

const Content = () => {
  return (
    <div className='content'>
         <div className="header">
            <h1 className="title">Keep going and Clash on!!!</h1>
            <input type="text" placeholder='Search...' />
         </div>
         <div className="main">
        {/* Cards Component */}
           <Cards />
         </div>
    </div>
  )
}

export default Content