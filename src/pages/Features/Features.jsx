import React from "react";
import Layout from '../../components/Layout'

const Feature = () => {
    return (
        <Layout>
            <div className='features'>
                <div className="features_heading">
                    <div className="features_line"></div>
                    <h1 className='features_title'>Explore</h1>
                </div>

                <div class="features_gallery">
                    <div className="gallery__item gallery__item--1">
                        <img src="/images/cheesecake-eggrolls.jpg" class="gallery__img" alt="" />
                    </div>

                    <figure className="gallery__item gallery__item--2">
                        <img src="/images/cocktail-cafe-caribbean.jpg" class="gallery__img" alt="" />
                    </figure>
                    
                    <figure className="gallery__item gallery__item--3">
                        <img src="/images/cocktail-one.jpg" class="gallery__img" alt="" />
                    </figure>

                    <figure class="gallery__item gallery__item--4">
                        <img src="/images/vegan-pasta-carpa-olives.jpg" class="gallery__img" alt="" />
                    </figure>

                    <figure className="gallery__item gallery__item--5">
                        <img src="/images/cocktail-gin-tonic.jpg" class="gallery__img 7" alt="" />
                    </figure>
                </div>

                <div class="features_gallery">
                    <figure className="gallery__item gallery__item--6">
                        <img src="/images/vegan-pad-thai.jpg" class="gallery__img" alt="" />
                    </figure>

                    <figure className="gallery__item gallery__item--7">
                        <img src="/images/dessert-four.jpg" class="gallery__img" alt="" />
                    </figure>
                    
                    <figure className="gallery__item gallery__item--8">
                        <img src="/images/dessert-ice-cream.jpg" class="gallery__img" alt="" />
                    </figure>

                    <figure class="gallery__item gallery__item--9">
                        <img src="/images/dessert-pear.jpg" class="gallery__img" alt="" />
                    </figure>

                    <figure className="gallery__item gallery__item--10">
                        <img src="/images/dessert-three.jpg" class="gallery__img 7" alt="" />
                    </figure>
                </div>
            </div>
        </Layout>
    );
}

export default Feature;