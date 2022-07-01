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
              <p className='desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit exercitationem veritatis eum vero quidem quos voluptates perspiciatis esse nisi, cupiditate odit beatae obcaecati. Impedit accusamus necessitatibus delectus culpa recusandae cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit exercitationem veritatis eum vero quidem quos voluptates perspiciatis esse nisi, cupiditate odit beatae obcaecati. Impedit accusamus necessitatibus delectus culpa recusandae cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque maiores dolorem earum et! Voluptates.</p>
            </div>
          </div>

          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src={AboutIllustration} alt="About Us Illustrator" className='d-block mx-lg-auto img-fluid' width='736px' />
            </div>
            <div className='col-6 why-use-head'>
              <h1>Why Use Mlaku?</h1>
              <p className='desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit exercitationem veritatis eum vero quidem quos voluptates perspiciatis esse nisi, cupiditate odit beatae obcaecati. Impedit accusamus necessitatibus delectus culpa recusandae cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit exercitationem veritatis eum vero quidem quos voluptates perspiciatis esse nisi, cupiditate odit beatae obcaecati. Impedit accusamus necessitatibus delectus culpa recusandae cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque maiores dolorem earum et! Voluptates.</p>
            </div>
          </div>

          <div className='row responsive-about hero-about d-flex pt-3 pb-3 px-md-0'>
            <div className='col-6'>
              <img src={HowToUseIllustration} alt="Step by step Illustrator" className='d-block mx-lg-auto img-fluid' width='524px' />
            </div>
            <div className='col-6 how-to-use-head'>
              <h1>How To Use?</h1>
              <p className='desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus itaque maiores dolorem earum et! Voluptates. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates fuga, delectus magni, eos, illum nulla eveniet modi fugit necessitatibus nam iusto beatae aut quis sint eligendi placeat! Quaerat, nemo blanditiis!</p>
            </div>
          </div>

          <div className='row our-team-wrapper'>
            <h1 className=''>Our Team</h1>
          </div>
          <p className='text-center desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit exercitationem veritatis eum vero quidem quos voluptates perspiciatis esse nisi, cupiditate odit beatae obcaecati. Impedit accusamus necessitatibus delectus culpa recusandae cumque. Lorem</p>

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
                developerName='Fachrul Dwi'
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
