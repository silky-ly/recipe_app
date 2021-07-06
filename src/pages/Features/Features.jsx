import React from "react";

const Feature = () => {
    return (
        <>
            <div className='features'>
                <h1 className='feature-title'>Eat me</h1>
                <div class="gallery">
                    <figure className="gallery__item gallery__item--1">
                        <img src="/images/cheesecake-eggrolls.jpg" class="gallery__img" alt="" />
                    </figure>

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

                <div class="gallery">
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
        </>
    );
}

export default Feature;