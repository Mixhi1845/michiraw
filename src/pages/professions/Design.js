import React from 'react';
//import './Design.css';

import ResponsiveGallery from 'react-responsive-gallery';

import spotlight from '../../assets/spotlight.bundle';

//import LightGallery from 'lightgallery/react';
//import { LightGallerySettings } from 'lightgallery/lg-settings';
//import lgZoom from 'lightgallery/plugins/zoom';

import Project from '../../components/modules/Project';

//bilder pro row kleiner machen

import img15 from '../../images/vector/fulls/18.08.2023.webp';
import img14 from '../../images/vector/fulls/12.08.2023.webp';
import img13 from '../../images/vector/fulls/09.08.2023.webp';
import img12 from '../../images/vector/fulls/31.07.2023.webp';
import img11 from '../../images/vector/fulls/30.07.2023.webp';
import img10 from '../../images/vector/fulls/25.07.2023.webp';
import img9 from '../../images/vector/fulls/16.07.2023.webp';
import img8 from '../../images/vector/fulls/15.07.2023.webp';
import img7 from '../../images/vector/fulls/14.07.2023.webp';
import img6 from '../../images/vector/fulls/12.07.2023.webp';
import img5 from '../../images/vector/fulls/10.04.2023.jpg';
import img4 from '../../images/vector/fulls/07.04.2023.jpg';
import img3 from '../../images/vector/fulls/03.04.2023.jpg';
import img2 from '../../images/vector/fulls/01.04.2023.jpg';
import img1 from '../../images/vector/fulls/31.03.2023.jpg';

const images = [
    {
        src: img15,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img14,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img13,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img12,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img11,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img10,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img9,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img8,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img7,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img6,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img5,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img4,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img3,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img2,
        description: '12.08.2023 | Image by me'
    },
    {
        src: img1,
        description: '12.08.2023 | Image by me'
    }
];

function Design() {
    return (
        <>
            <div className="page__title">
                <h1>Design</h1>
                <p>I mostly focus on Graphic Design and love to dedicate my time into creating beautiful artwork...</p>
            </div>

            <div class="main-content">
                <main>
                    <div class="main-grid">
                        <Project src="" title="Internship" LinkTo="/webdev/internship" />
                    </div>
                </main>
            </div>

            <ResponsiveGallery useLightBox images={images} />

            <script src={spotlight} defer></script>
        </>
    );
}

export default Design;
