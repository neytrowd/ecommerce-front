import { Images } from '@/Assets/Images';
import { Link } from '@/Components/Controls/Link/Link';
import { PagesRouting } from '@/Routing';
import { Button } from '@/Components/Controls/Button/Button';

export function Carousel() {
   return (
      <div className="container-fluid mb-3">
         <div className="row px-xl-5">
            <div className="col-lg-8">
               <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item position-relative active" style={{ height: 430 }}>
                        <img className="position-absolute w-100 h-100" src={Images.Carousel1} alt="offer" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                           <div className="p-3" style={{ maxWidth: 700 }}>
                              <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                                 Men Fashion
                              </h1>
                              <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                                 Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam
                                 elitr ipsum diam
                              </p>

                              <Link to={PagesRouting.MainPages.ShopPage}>
                                 <Button
                                    theme="outline-light"
                                    className="py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                                 >
                                    Shop Now
                                 </Button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="col-lg-4">
               <div className="product-offer mb-30" style={{ height: 200 }}>
                  <img className="img-fluid" src={Images.Offer1} alt="offer" />
                  <div className="offer-text">
                     <h6 className="text-white text-uppercase">Save 20%</h6>
                     <h3 className="text-white mb-3">Special Offer</h3>
                     <Link to={PagesRouting.MainPages.ShopPage}>
                        <Button>Shop Now</Button>
                     </Link>
                  </div>
               </div>
               <div className="product-offer mb-30" style={{ height: 200 }}>
                  <img className="img-fluid" src={Images.Offer2} alt="offer" />
                  <div className="offer-text">
                     <h6 className="text-white text-uppercase">Save 20%</h6>
                     <h3 className="text-white mb-3">Special Offer</h3>
                     <Link to={PagesRouting.MainPages.ShopPage}>
                        <Button>Shop Now</Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
