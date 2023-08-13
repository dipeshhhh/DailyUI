import React from 'react';
import './Mainpage.css';
import NavigationCard from '../Components/NavigationCard/NavigationCard';

const pagesDataArray = [
  { title: 'Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#001: Signup Page', link: '/signup', image: require('../Images/sample.png') },
]

function Mainpage() {
  return (
    <div className='mainpage-main'>
      <h1>Navigate challenges</h1>
      <main>
        {
          pagesDataArray.map(page => (
            <NavigationCard 
              key={page.title}
              title={page.title}
              pageLink={page.link}
              image={page.image}
            />
          ))
        }
      </main>
    </div>
  )
}

export default Mainpage;