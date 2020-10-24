import React from 'react';
import TalkBubbleMaskRight from './components/talkBubbleMaskRight';

const Content = {
    home: [
        {
            component: 'Header',
            title: <h1>Defining the new and emerging user experiences</h1>,
            subTitle: <h6>Enger Bewza: Product designer</h6>,
            button: {
                text: 'View my work',
                href: 'myWork',
                action: 'scrollTo'
            },
            img: [
                require('./assets/img/img1.jpg').default,
                require('./assets/img/img2.jpg').default,
                require('./assets/img/img3.jpg').default
            ]
        },
        {
            component: 'AlternatingFeatures',
            id: 'myWork',
            features: [
                {
                    title: <h3>Robots that deliver your food</h3>,
                    text: <p>Serve, the autonomous delivery rover that safely navigates sidewalks today delivering food from restaurants to your door.</p>,
                    class: 'serve',
                    href: '/serve',
                    mask: TalkBubbleMaskRight,
                    demo: {
                        video: require('./assets/video/serve_homepage_video_reduced.mp4').default,
                        img: require('./assets/img/featureServe.jpg').default,
                    }
                },
                {
                    title: <h3>The right size, from your phone</h3>,
                    text: <p>Ever buy shoes online only to realize they don't fit? Ya, that sucks. Dr. Scholl's 3D and Wiivv are a step in the right direction.</p>,
                    class: 'wiivv',
                    href: '/wiivv',
                    demo: {
                        img: require('./assets/img/featureWiivv.jpg').default,
                    },
                    overlayImage: {
                        img: require('./assets/img/overlayWiivv.png').default,
                        class: 'overlayWiivv'
                    }
                }
            ]
        },
        {
            component: 'AccordionFeatures',
            title: <h3>A few things I do</h3>,
            features: [
                {
                    title: <h5>UX / UI design</h5>,
                    text: <p>From logic flows, prototypes to UI design, design-systems and dev handoffs.</p>,
                    visuals: [
                        require('./assets/img/CountdownFeatures_1_1.png').default,
                        require('./assets/img/CountdownFeatures_1_2.png').default,
                        require('./assets/img/CountdownFeatures_1_3.png').default,
                    ]
                },
                {
                    title: <h5>Physical product and CMF</h5>,
                    text: <p>Laser cut and 3D printed prototypes all the way to finished product along with packaging.</p>,
                    visuals: [
                        require('./assets/img/CountdownFeatures_2_1.png').default,
                        require('./assets/img/CountdownFeatures_2_2.png').default,
                        require('./assets/img/CountdownFeatures_2_3.png').default,
                        require('./assets/img/CountdownFeatures_2_4.png').default,
                    ] 
                },
                {
                    title: <h5>Dev work</h5>,
                    text: <p>Web-dev, real prototypes, and even C code for embedded systems.</p>,
                    visuals: [
                        require('./assets/img/CountdownFeatures_3_1.png').default,
                        require('./assets/img/CountdownFeatures_3_2.png').default,
                        require('./assets/img/CountdownFeatures_3_3.png').default,
                        require('./assets/img/CountdownFeatures_3_4.png').default,
                    ] 
                },
            ]
        }, 
        {
            component: 'Footer',
            headshot: require('./assets/img/me.jpg').default,
            bgLayers: [
                require('./assets/img/footer_bg_shapes.png').default,
                require('./assets/img/footer_bg_pattern.png').default,
            ],
            title: <h3>Enger Bewza: Bay area product designer</h3>,
            text: [
                <p>Hello! Thanks for checking out my work!</p>,
                <p>I started out learning 3D design back in 2005. I also built games and websites in my free time. I went to school for 3D Design in 2011 and was eventually  drawn into  product design. I enjoy keeping up with the latest design trends, dev libraries and coolest hardware, but being able to connect the dots and build something people want is the most exciting part.</p>,
                <p>I'm passionate about working on the most challenging and undefined products, with cool people. Right now that's the X team at Postmates building our robot product. </p>,
            ],
            buttons: [
                {
                    text: 'Download résumé',
                    href: require('./assets/docs/resume.pdf').default, 
                    action: 'linkExternal',
                    target: '_blank',
                    iconImg: {
                        image: require('./assets/img/icon_resume.svg').default,
                        class: 'overflowRight' 
                    }
                },
                {
                    text: 'Email me',
                    action: 'textCopyModal',
                    copy: (()=>{
                        return 'eng' + 'er' + 'be' + 'wza' + '@' + 'gm' + 'ail' + '.c' + 'om'
                    }),
                    iconImg: {
                        image: require('./assets/img/icon_mail.svg').default,
                        class: 'overflowRight' 
                    }
                },
            ],
            social: [
                {
                    alt: 'Linkedin',
                    image: require('./assets/img/social_in.svg').default,
                    href: 'https://www.linkedin.com/in/engerbewza/',
                },
                {
                    alt: 'Github',
                    image: require('./assets/img/social_github.svg').default,
                    href: 'https://github.com/engerb',
                },
                {
                    alt: 'Codepen',
                    image: require('./assets/img/social_codepen.svg').default,
                    href: 'https://codepen.io/enger',
                },
                {
                    alt: 'Behance',
                    image: require('./assets/img/social_be.svg').default,
                    href: 'https://www.behance.net/enger-b',
                },
            ]
        }
    ],
    serve: [
        {
            component: 'ProjectHeader',
            class: 'serve',
            backgroundComponent: 'ServeViewer',
            title: <h1>Serve: The autonomous delivery robot.</h1>,
            subTitle: <h3>Safely navigates sidewalks today delivering food from restaurants to your door.</h3>,
            stats: {
                role: {
                    where: <h5>Postmates X</h5>,
                    who: <p>Product designer</p>,
                    when: <p>2018 - Today</p>,
                },
                contributions: {
                    title: <h5>My Contributions</h5>,
                    links: [
                        {
                            title: 'Sidewalk UI', 
                            link: 'sidewalkUI'
                        },
                        {
                            title: 'Piloting UI',
                            link: 'pilotUI'
                        },
                        {
                            title: 'Hardware and CMF',
                            link: 'hardware'
                        }
                    ]
                },
                skills: {
                    title: <h5>Skills used</h5>,
                    text: <p>UI / UX design, harware prototyping, software dev, user-research</p>
                },
                readingTime: {
                    title: <h5>Reading time</h5>,
                    text: <p>10 - 15 minutes</p>
                }
            }
        },
        {

        }
    ],
    wiivv: [

    ]
}

export default Content;