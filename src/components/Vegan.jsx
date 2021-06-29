// import 


const Vegan = () => {
    return (
        <div>
            <h3 className='vegan-title container'>Vegan</h3>
            <div class="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src="img/image-1.jpg" class="gallery__img" alt="Image 1" />
                </figure>

                <figure className="gallery__item gallery__item--2">
                    <img src="img/image-2.jpg" class="gallery__img" alt="Image 2" />
                </figure>
                
                <figure className="gallery__item gallery__item--3">
                    <img src="img/image-3.jpg" class="gallery__img" alt="Image 3" />
                </figure>

                <figure class="gallery__item gallery__item--4">
                    <img src="img/image-4.jpg" alt="Gallery image 4" class="gallery__img" />
                </figure>

                <figure class="gallery__item gallery__item--5">
                    <img src="img/image-5.jpg" alt="Gallery image 5" class="gallery__img" />
                </figure>

                <figure class="gallery__item gallery__item--6">
                    <img src="img/image-6.jpg" alt="Gallery image 6" class="gallery__img" />
                </figure>
            </div>
        </div>
    );
}

export default Vegan;