import {Swiper} from 'swiper/react';
import {Navigation,Pagination,Scrollbar,Ally} from 'swiper/modules';
import LeftNavigation from './LeftNavigation/LeftNavigation';
import RightNavigation from './RightNavigation/RightNavigation';
import { SwiperSlide, useSwiper } from 'swiper/react';
import { useEffect } from 'react';

function Carousel(props){
    const {data, renderComponent} = props;

    const Controls = (props)=>{
        const {data} = props;
        const swiper = useSwiper();

        useEffect(()=>{
            swiper.slideTo(0);

        },[data]);

    }

    return (
        <div>
            <Swiper
            modules = {Navigation}
            slidesPerView = {"auto"}
            spaceBetween = {50}>
                <Controls data={data}/>
                <LeftNavigation/>
                {
                    data.map(item=>{
                       return <SwiperSlide>{renderComponent(item)}</SwiperSlide>
                    })
                }
                <RightNavigation/>
                
            </Swiper>
        </div>
    );
}

export default Carousel;