import React from 'react';

export function Navbar() {
   return (
      <div className="container-fluid bg-dark mb-30">
         <div className="row px-xl-5">
            <div className="col-lg-12">
               <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                  <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                     <div className="navbar-nav mr-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">
                           Home
                        </a>
                        <a href="shop.html" className="nav-item nav-link">
                           Shop
                        </a>
                        <a href="cart.html" className="nav-item nav-link">
                           Shopping Cart
                        </a>
                        <a href="contact.html" className="nav-item nav-link">
                           Contact
                        </a>
                     </div>

                     <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <a href="" className="btn px-0">
                           <i className="fas fa-heart text-primary" />
                           <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                        </a>
                        <a href="" className="btn px-0 ml-3">
                           <i className="fas fa-shopping-cart text-primary" />
                           <span className="badge text-secondary border border-secondary rounded-circle">0</span>
                        </a>
                     </div>
                  </div>
               </nav>
            </div>
         </div>
      </div>
   );
}
