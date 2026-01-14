import React from 'react'
import SectionHeading from './SectionsHeading/SectionHeading'
import Card from '../Card/Card'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const NewArrivals = () => {
  const items = [
    { 
      'title': 'Jeans',
      imagePath: require('../../assets/img/jeans.jpg'),
      description: 'Yeni Desenler'
    },
    { 
      'title': 'Gömlekler',
      imagePath: require('../../assets/img/shirts.jpg'),
      description: 'Farklı Renkler'
    },
    { 
      'title': 'Tişörtler',
      imagePath: require('../../assets/img/tshirts.jpeg'),
      description: 'Yaz Koleksiyonu'
    },
    { 
      'title': 'Elbiseler',
      imagePath: require('../../assets/img/dresses.jpg'),
      description: 'Özel Tasarım'
    },
    { 
      'title': 'Eşofmanlar',
      imagePath: require('../../assets/img/joggers.jpg'),
      description: 'Rahat Kesim'
    },
    { 
      'title': 'Kurtiler',
      imagePath: require('../../assets/img/kurtis.jpg'),
      description: 'Geleneksel Tasarım'
    }
  ]

  // Custom responsive configuration
  const customResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 4,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
      partialVisibilityGutter: 20
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
      partialVisibilityGutter: 10,
      slidesToSlide: 2
    }
  }

  return (
    <div className="mb-12">
      <SectionHeading title={'Yeni Eklenenler'} />
      
      <div className="relative mt-6">
        <Carousel
          responsive={customResponsive}
          autoPlay={false}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={false}
          keyBoardControl={true}
          centerMode={false}
          containerClass="carousel-container"
          itemClass="px-3" // Better spacing
          removeArrowOnDeviceType={["tablet", "mobile"]}
          arrows={true}
          additionalTransfrom={0}
          focusOnSelect={false}
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          shouldResetAutoplay={true}
          sliderClass=""
          slidesToSlide={1}
        >
          {items.map((item, index) => (
            <div key={index} className="h-full pb-4">
              <Card 
                title={item.title} 
                imagePath={item.imagePath}
                description={item.description}
                height="280px"
                actionArrow={true}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default NewArrivals