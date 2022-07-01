import React from 'react';
import { Link } from 'react-router-dom';
import './developer-card.css';

const DeveloperCard = props => {
  const {developerName, git_url, linkedin_url, wa_url, ig_url, dev_image} = props;
  return (
      <div className='developer-card-wrapper'>
        <div className='img-developer-wrapper'>
          <img src={dev_image} className='img-developer' alt="Developer_Image" />
        </div>
        <div className='developer-name'>
          <h3>{developerName}</h3>
          <p>Web Developer</p>
        </div>
        <div className='developer-contact row-cols-4'>
          <a href={git_url} className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-github'></i></a>
          <a href={linkedin_url} className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-linkedin'></i></a>
          <a href={wa_url} className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-whatsapp'></i></a>
          <a href={ig_url} className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-instagram'></i></a>
        </div>
      </div>
  )
}

export default DeveloperCard;
