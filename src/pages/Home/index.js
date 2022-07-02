import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import Image1 from '../../assets/images/img-slider1.jpg';
import Image2 from '../../assets/images/img-slider2.jpg';
import Image3 from '../../assets/images/img-slider3.jpg';
import TouristIllustration from '../../assets/images/home.png';

import './home.css';
import {ProvinceCard, CulinaryHighlightCard, AccommodationHighlightCard} from '../../components/';

const text1 = "Wonders of The World in Indonesia";
const text2 = "Balinese Natural Charm";
const text3 = "Come Visit To Indonesia!";

const textdesc1 = "Candi Borobudur, Jawa Tengah";
const textdesc2 = "Pura Ulun Danu Beratan, Bali";
const textdesc3 = '"You will get what you have never had before"';

const positionText1 = '1'
const positionText2 = '2'
const positionText3 = '3'
const headText3 = 'visit-indonesia';
const descText3 = 'visit-desc';
const offIcon = 'icon-off';

const Homey = (image, textHead, textLocation, positionText, headText, descText, offIcon) => {
  return (
    <SwiperSlide>
      <div className={`text-img-slider${positionText}`}>
        <h2 className={headText}>{textHead}</h2>
        <h5 className={descText}><i className={`${offIcon} fa fa-map-marker`}></i>&nbsp; {textLocation}</h5>
      </div>
      <img className="img" src={image} alt="Image_Sliders"/>
    </SwiperSlide>
  );
}

const Home = () => {
  return (
    <main className='home-wrapper'>
      <div className='row image-slider responsive-wrapper d-flex pb-3 px-md-0'>
        <div className='col swiper-wrapper'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            navigation
            autoplay={false}
            pagination={{ clickable: true }}
          >

            {Homey(Image1, text1, textdesc1, positionText1)}
            {Homey(Image2, text2, textdesc2, positionText2)}
            {Homey(Image3, text3, textdesc3, positionText3, headText3, descText3, offIcon)}
          </Swiper>
        </div>
      </div>

      <div className='container '>
        <div className='home-content-wrapper'>
          <div className='row responsive-wrapper mlaku-hero d-flex pt-3 pb-3 px-md-0'>
            <div className='col-lg-5'>
              <img src={TouristIllustration} alt="Tourist with her bag Illustration" className='d-block mx-lg-auto img-fluid' width='500px' />
            </div>
            <div className='col-lg-7'>
              <h1>Explore Trough Survival</h1>
              <p className='description-mlaku mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae ad saepe omnis eos officiis, assumenda, iure quam odio aut incidunt pariatur, amet laboriosam delectus facilis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae ad saepe omnis eos officiis, assumenda, iure quam odio aut incidunt pariatur, amet laboriosam delectus facilis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae ad saepe omnis eos officiis, assumenda, iure quam odio aut incidunt pariatur, amet laboriosam delectus facilis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae ad saepe omnis eos officiis, assumenda, iure quam odio aut incidunt pariatur, amet laboriosam delectus facilis.
                Officia perferendis esse quidem!</p>
            </div>
          </div>
          
          
          <div className='row highlight-wrapper'>
            <h2 className='col'>Destination Highlight</h2>
          </div>
          <p className='text-center desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam.</p>

          <div className='row section-province-wrapper responsive-wrapper row-cols-5 d-flex'>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Bali'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Kalimantan Timur'
                url='/object-tourism'
                bg_image='box-overlay bg-kaltim'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Lombok'
                url='/object-tourism'
                bg_image='box-overlay bg-lombok'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Sulawesi'
                url='/object-tourism'
                bg_image='box-overlay bg-sulawesi'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Jawa Timur'
                url='/object-tourism'
                bg_image='box-overlay bg-jawatimur'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Jawa Tengah'
                url='/object-tourism'
                bg_image='box-overlay bg-bg-jawatengah'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Jawa Barat'
                url='/object-tourism'
                bg_image='box-overlay bg-jawabarat'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Bali'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0 mb-0'>
              <ProvinceCard
                province='Bali'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0'>
              <ProvinceCard
                province='Bali'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
          </div>

          <div className='row highlight-wrapper'>
            <h2 className='col'>Culinary Highlight</h2>
          </div>
          <p className='text-center desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam.</p>
          <div className='row section-culinary-wrapper responsive-wrapper d-flex row-cols-3'>
            <div className='col px-0'>
              <CulinaryHighlightCard
                culinaryName='Nasi Padang'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0'>
              <CulinaryHighlightCard
                culinaryName='Sate'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0'>
              <CulinaryHighlightCard
                culinaryName='Gudeg'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0'>
              <CulinaryHighlightCard
                culinaryName='Lawar'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0'>
              <CulinaryHighlightCard
                culinaryName='Dodol'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
            <div className='col px-0'>
              <CulinaryHighlightCard
                culinaryName='Bubur'
                url='/object-tourism'
                bg_image='box-overlay bg-bali'
              />
            </div>
          </div>

          <div className='row highlight-wrapper'>
            <h2 className='col'>Acommodation Highlight</h2>
          </div>
          <p className='text-center desc-highlight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur eius eaque eos neque id quaerat vel fugiat magnam.</p>
          <div className='row section-acommodation-wrapper responsive-wrapper d-flex row-cols-3'>
            <div className='col px-0'>
              <AccommodationHighlightCard
                accommodationName='Villa Karma Kandara'
                url='/object-tourism'
                bg_image='box-overlay bg-ac1'
              />
            </div>
            <div className='col px-0'>
              <AccommodationHighlightCard
                accommodationName='Kuta Guest House'
                url='/object-tourism'
                bg_image='box-overlay bg-ac2'
              />
            </div>
            <div className='col px-0'>
              <AccommodationHighlightCard
                accommodationName='Green Kubu Villa'
                url='/object-tourism'
                bg_image='box-overlay bg-ac3'
              />
            </div>
          </div>
          
        </div>
      </div>

    </main>
  )
};

export default  Home;