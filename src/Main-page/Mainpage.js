import React from 'react';
import './Mainpage.css';
import NavigationCard from '../Components/NavigationCard/NavigationCard';

const pagesDataArray = [
  { title: '#001: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#002: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#003: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#004: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#005: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#006: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#007: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#008: Sample Page', link: '/', image: require('../Images/sample.png') },
  { title: '#009: Sample Page', link: '/', image: require('../Images/sample.png') },
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