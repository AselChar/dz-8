import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from "../../assets/image1.jpeg"
import image2 from "../../assets/image2.jpeg"
import image3 from "../../assets/image3.jpeg"
import style from "./Main.module.css"
const Main = () => {
    return (
        <div className={style.container}>
            <Swiper style={{width: "400px", height: "400px"}}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide> <img className={style.images} src={image1}/> </SwiperSlide>
                <SwiperSlide><img className={style.images} src={image2}/></SwiperSlide>
                <SwiperSlide><img className={style.images} src={image3}/></SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};


export default Main;