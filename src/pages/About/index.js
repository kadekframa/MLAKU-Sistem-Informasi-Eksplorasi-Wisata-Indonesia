import React from 'react';
import LogoMlaku from '../../assets/images/mlaku-logo.png';
import AboutIllustration from '../../assets/images/about-us.png';
import HowToUseIllustration from '../../assets/images/how-to-use.png';
import { DeveloperCard } from '../../components';
import { Dev1, Dev2, Dev3, Dev4 } from '../../assets';
import './about.css';

const About = () => {
  return (
    <main className='about-wrapper'>
      <div className='container'>
        <div className='about-content-wrapper'>
          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6 m-auto d-flex'>
              <img src={LogoMlaku} alt="Logo Mlaku" className='d-block mx-lg-auto img-fluid' width='374px' />
            </div>
            <div className='col-6 about-us-head'>
              <h1 >About Mlaku</h1>
              <p className='desc-highlight'>Mlaku is a system that is able to provide information to local and
                foreign tourists to find information related to tourism in Indonesia such as tourist attractions,
                culinary tourism, accommodation (villas, hotels, inns). With The construction of this website-based
                system is expected to make it easier for local tourists or abroad for recreation, vacation or travel
                in Indonesia. This system too it is hoped that it can help UMKM, especially culinary ones in Indonesia,
                to be able to introduce their products. This website has several features, including object tourist features,
                culinary features, accommodation features</p>
            </div>
          </div>

          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src={AboutIllustration} alt="About Us Illustrator" className='d-block mx-lg-auto img-fluid' width='736px' />
            </div>
            <div className='col-6 why-use-head'>
              <h1>Why Use Mlaku?</h1>
              <p className='desc-highlight'>
                This application can provide access to users to be able to insert new tourist data
                which later each inputted data can become tourist information that will be displayed for tourists.
                This feature was created with the aim that this application can develop through the support of the Indonesian people.
                By using this application, it is hoped that it can help increase the interest of tourists to come on vacation to Indonesia.
                And it is also hoped that this application can increase the productivity of MSMEs, especially culinary ones,
                so that they can introduce their products.</p>
            </div>
          </div>

          <div className='row responsive-about how-to-use-wrapper hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src={HowToUseIllustration} alt="Step by step Illustrator" className=' d-block mx-lg-auto img-fluid' width='524px' />
            </div>
            <div className='col-6 how-to-use-head'>
              <h1>How To Use?</h1>
              <p className='desc-highlight'>
                The first time you open the application, the user will be directed to the application's home page which contains several highlights.
                This system provides 3 main features, namely Object Tourist, Culinary and Accommodation. Users can use all available features.
                If the user also wants to add data to the system, the user must first register and create an account. If you already have an account,
                the user can use that account to login. After logging in using a registered account, the user can insert data in various available features.</p>
            </div>
          </div>

          <div className='row our-team-wrapper'>
            <h1 className=''>Our Team</h1>
          </div>
          <p className='our-team-desc desc-highlight'>Mlaku Development Team will continue to strive to develop this system on an ongoing basis so that it can be used for the better</p>

          <div className='row our-team-section responsive-about d-flex row-cols-4'>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Lale Inaya'
                git_url='https://github.com/laleinaya12'
                linkedin_url='https://www.linkedin.com/in/lale-inaya-firasya-7552aa218/'
                wa_url='+62 0859 6411 6702'
                ig_url='https://www.instagram.com/yr.pov_/'
                dev_image={Dev1}
              />
            </div>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Sucita Dharma'
                git_url='https://github.com/DharmaSucita'
                linkedin_url='https://www.linkedin.com/in/i-komang-sucita-darma-02bb48243'
                wa_url='+62 '
                ig_url='https://www.instagram.com/dhrmasucita/'
                dev_image={Dev2}
              />
            </div>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Fachrul Dwi Aprilian'
                git_url='https://github.com/aprlfch'
                linkedin_url='https://www.linkedin.com/in/fachrul-dwi-aprilian-97543b230'
                wa_url='+62 0823 1121 3404'
                ig_url='https://www.instagram.com/aprlfch/'
                dev_image={Dev3}
              />
            </div>
            <div className='col px-0'>
              <DeveloperCard
                developerName='Kadek Frama'
                git_url='https://github.com/kadekframa'
                linkedin_url='https://www.linkedin.com/in/kadek-frama-danamastyana-b534211b7/'
                wa_url='+62 0882 3609 9236'
                ig_url='https://www.instagram.com/kadek_frama'
                dev_image={Dev4}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;
