//Gallerie: https://github.com/OriAmir/React-Responsive-Gallery

import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';

import img1 from '../../images/pics/fulls/IMG_3804.webp';

const images = [
    {
        src: img1,
        title: 'banana'
    },
    {
        src: img1
    }
];

function Photography() {
    return (
        <>
            <div className="page__title">
                <h1>Photography</h1>
                <p>Ever since I am a small kid I loved taking photos. As a matter of fact I bought my first DSLR in sixth grade.</p>
            </div>
            <ResponsiveGallery useLightBox images={images} />
        </>
    );
}

export default Photography;
