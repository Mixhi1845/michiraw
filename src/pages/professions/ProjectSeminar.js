// components/ProjectSeminar.js
import React from 'react';
import SimpleGallery from '../../components/modules/GalleryItem';

function ProjectSeminar() {
    return (
        <>
            <div className="hero__profession">
                <h1>Project Seminar</h1>
                <p>As part of my A levels we have organized projects for students at our school.</p>
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

export default ProjectSeminar;
