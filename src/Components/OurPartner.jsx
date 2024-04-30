import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurPartner = () => {
  return (
    <div>
      <div className="text-center mt-12 lg:mt-40">
        <h2 className="text-2xl text-red-500 mb-8 font-poppins font-medium bg-gray-200 lg:w-[25%] mx-auto rounded-md">
          Popular Companies
        </h2>
        <h2 className="text-3xl font-poppins font-semibold">
          Our Best Partners
        </h2>
        <p className="text-xl font-poppins my-6 lg:my-10 lg:w-1/2 mx-auto">
          At <span className="text-red-400">[Artistry]</span>, we value
          collaboration and strategic partnerships to deliver exceptional
          results for our clients. Our network of partners consists of industry
          leaders, innovative startups, and trusted service providers who share
          our commitment to excellence and client satisfaction.
        </p>
      </div>
      <div>
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" p-4 text-center flex flex-col lg:flex-row lg:gap-16 items-center justify-center text-red-400">
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  themeforest
                </h2>
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  codecanyon
                </h2>
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  audiojungle
                </h2>
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  envatomarket
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-4 text-center flex flex-col lg:flex-row lg:gap-16 items-center justify-center text-red-400">
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  videohibe
                </h2>
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  graphicriver
                </h2>
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  photodune
                </h2>
                <h2 className="card shadow-xl text-3xl font-poppins font-semibold p-6">
                  3docean
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default OurPartner;
