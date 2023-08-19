// components/Photography.js
//Gallerie: https://github.com/OriAmir/React-Responsive-Gallery

import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';

import img6 from '../../images/3d/fulls/blackrose.png';
import img5 from '../../images/3d/fulls/nebula_finished.jpg';
import img4 from '../../images/3d/fulls/wallpaperoil.png';
import img3 from '../../images/3d/fulls/MercuryLonely.png';
import img2 from '../../images/3d/fulls/synth.png';
import img1 from '../../images/3d/fulls/M2.3.png';

const images = [
    {
        src: img6,
        title: 'Black Rosé',
        description: 'personal project a while ago'
    },
    {
        src: img5,
        title: 'Nebula'
    },
    {
        src: img4,
        title: 'Oil'
    },
    {
        src: img3,
        title: 'Moon or Mercury'
    },
    {
        src: img2,
        title: 'Synth'
    },
    {
        src: img1,
        title: 'M'
    }
];

//const screenWidthSizes = [{ xs: 420, s: 600, m: 768, l: 992, xl: 1200 }];
//const numOfImagesPerRow = [{ xs: 1, s: 2, m: 3, l: 3, xl: 4, xxl: 5 }];
//const imageMaxWidth = [{ xs: 100, s: 100, m: 100, l: 100, xl: 100, xxl: 100 }];
//const colsPadding = [{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }];
//const imagesPaddingBottom = [{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }];

//                numOfImagesPerRow={[{ xs: 1, s: 2, m: 3, l: 3, xl: 4, xxl: 5 }]}
//                screenWidthSizes={[{ xs: 420, s: 600, m: 768, l: 992, xl: 1200 }]}
//                imageMaxWidth={[{ xs: 100, s: 100, m: 100, l: 100, xl: 100, xxl: 100 }]}
//                colsPadding={[{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }]}
//                imagesPaddingBottom={[{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }]}

function Blender() {
    return (
        <>
            <div className="page__title">
                <h1>Blender</h1>
                <p>I do that on the side lol.</p>
            </div>
            <ResponsiveGallery useLightBox images={images} />
        </>
    );
}

export default Blender;
