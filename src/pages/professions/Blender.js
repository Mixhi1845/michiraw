// components/Blender.js
import React from 'react';
import SimpleGallery from '../../components/modules/GalleryItem';

function Blender() {
    return (
        <>
            <div className="hero__profession">
                <h1>Blender</h1>
                <p>I do that on the side lol.</p>
            </div>

            <div className="gallery">
                <SimpleGallery
                    galleryID="my-test-gallery"
                    images={[
                        {
                            largeURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_664.jpg',
                            thumbnailURL:
                                'https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_664.jpg',
                            width: 664,
                            height: 830
                        },

                        {
                            largeURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
                            thumbnailURL: 'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',

                            width: 1875,
                            height: 2500
                        }
                    ]}
                />
            </div>
        </>
    );
}

export default Blender;
