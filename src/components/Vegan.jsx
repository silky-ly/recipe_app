import vone from '../images/vone.jpg';
import vtwo from '../images/vtwo.jpg';
import vthree from '../images/vthree.jpg';
import vfour from '../images/vfour.jpg';
import vfive from '../images/vfive.jpg';
import vsix from '../images/vsix.jpg';
import veight from '../images/veight.jpg';


const Vegan = () => {
    return (
        <div className='container'>
            <h3 className='vegan-title'>Vegan</h3>
            <div class="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src={ vone } class="gallery__img" alt="Image 1" />
                </figure>

                <figure className="gallery__item gallery__item--2">
                    <img src={ vtwo } class="gallery__img" alt="Image 2" />
                </figure>
                
                <figure className="gallery__item gallery__item--3">
                    <img src={ vthree } class="gallery__img" alt="Image 3" />
                </figure>

                <figure class="gallery__item gallery__item--4">
                    <img src={ vfour } alt="Gallery image 4" class="gallery__img" />
                </figure>

                <figure class="gallery__item gallery__item--5">
                    <img src={ vfive } alt="Gallery image 5" class="gallery__img" />
                </figure>

                <figure class="gallery__item gallery__item--6">
                    <img src={ vsix } alt="Gallery image 6" class="gallery__img" />
                </figure>

                <figure className="gallery__item gallery__item--7">
                    <img src={ veight } class="gallery__img 7" alt="Image 7" />
                </figure>

                <figure class="gallery__item gallery__item--8">
                    <img src={ veight } alt="Gallery image 8" class="gallery__img" />
                </figure>
            </div>

            <div class="gallery">
                <figure className="gallery__item gallery__item--1">
                    <img src={ vone } class="gallery__img" alt="Image 1" />
                </figure>

                <figure className="gallery__item gallery__item--2">
                    <img src={ vtwo } class="gallery__img" alt="Image 2" />
                </figure>
                
                <figure className="gallery__item gallery__item--3">
                    <img src={ vthree } class="gallery__img" alt="Image 3" />
                </figure>

                <figure class="gallery__item gallery__item--4">
                    <img src={ vfour } alt="Gallery image 4" class="gallery__img" />
                </figure>

                <figure class="gallery__item gallery__item--5">
                    <img src={ vfive } alt="Gallery image 5" class="gallery__img" />
                </figure>

                <figure class="gallery__item gallery__item--6">
                    <img src={ vsix } alt="Gallery image 6" class="gallery__img" />
                </figure>

                <figure className="gallery__item gallery__item--7">
                    <img src={ veight } class="gallery__img 7" alt="Image 7" />
                </figure>

                <figure class="gallery__item gallery__item--8">
                    <img src={ veight } alt="Gallery image 8" class="gallery__img" />
                </figure>
            </div>
        </div>
    );
}

export default Vegan;