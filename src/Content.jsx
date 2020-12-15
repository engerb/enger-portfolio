import React from 'react';
import TalkBubbleMaskRight from './components/talkBubbleMaskRight';

const Content = {
    preLoad: [
        require('./assets/img/serveBG.jpg').default, 
        require('./assets/img/serveTop.png').default, 
        require('./assets/img/serveMobile.jpg').default,
        require('./assets/img/wiivvHeaderBG.jpg').default, 
        require('./assets/img/wiivvHeaderoverlay.svg').default, 
        require('./assets/img/wiivvHeaderMobile.jpg').default,
        require('./assets/img/CountdownFeatures_2_1.svg').default,
        require('./assets/img/CountdownFeatures_2_2.png').default,
        require('./assets/img/CountdownFeatures_2_3.png').default,
        require('./assets/img/CountdownFeatures_2_4.png').default,
        require('./assets/img/CountdownFeatures_3_1.svg').default,
        require('./assets/img/CountdownFeatures_3_2.png').default,
        require('./assets/img/CountdownFeatures_3_3.png').default,
        require('./assets/img/CountdownFeatures_3_4.png').default,
    ],
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
                        require('./assets/img/CountdownFeatures_1_1.svg').default,
                        require('./assets/img/CountdownFeatures_1_2.png').default,
                        require('./assets/img/CountdownFeatures_1_3.png').default,
                    ]
                },
                {
                    title: <h5>Physical product and CMF</h5>,
                    text: <p>Laser cut and 3D printed prototypes all the way to finished product along with packaging.</p>,
                    visuals: [
                        require('./assets/img/CountdownFeatures_2_1.svg').default,
                        require('./assets/img/CountdownFeatures_2_2.png').default,
                        require('./assets/img/CountdownFeatures_2_3.png').default,
                        require('./assets/img/CountdownFeatures_2_4.png').default,
                    ] 
                },
                {
                    title: <h5>Dev work</h5>,
                    text: <p>Web-dev, live prototypes, and even C code for embedded systems.</p>,
                    visuals: [
                        require('./assets/img/CountdownFeatures_3_1.svg').default,
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
                require('./assets/img/footer_bg_pattern.png').default,
                require('./assets/img/footer_bg_shapes.svg').default,
            ],
            title: <h3>Enger Bewza: Bay area product designer</h3>,
            text: [
                <p>Hello! Thanks for checking out my work!</p>,
                <p>I started out learning 3D design back in 2005. I also built games and websites in my free time. I went to school for 3D Design in 2011 and was eventually  drawn into  product design. I enjoy keeping up with the latest design trends, dev libraries and coolest hardware, but being able to connect the dots and build something people want is the most exciting part.</p>,
                <p>I'm passionate about working on the most challenging and undefined products, with cool people. Right now that's the X team at Postmates building our robot product.</p>,
                
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
            component: 'ProjectIntro',
            title: <h2>Delivery robots?</h2>,
            description: <p>In 2018, our design team set out to make delivery robot interactions more intuitive and enjoyable. The landscape at that point was very undefined with robots ranging from difficult to understand all the way to intimidating.</p>,
            goals: ['Friendly and approachable', 'Able to communicate intent', 'People should feel safe around it', 'Secure and hygienic', 'Recognizable, not just some robot'],
            img: require('./assets/img/serveLoading.jpg').default
        },
        {
            component: 'SplitImage',
            topText: [
                <h3>Meet Serve</h3>, 
                <p>After testing concepts with online surveys and cardboard models, we landed on Serve. Most people intuitively understood where the "front" was, the face, and how to interact with it.</p>
            ],
            img: require('./assets/img/serve_progress.png').default,
            bottomColor: '#EAEBF0',
            bottomColorHeight: '33%',
        },
        {
            component: 'AlternatingContent',
            backgroundColor: '#EAEBF0',
            id: 'sidewalkUI',
            topText: [
                <h2>The "sidewalk UI"</h2>, 
                <p>Between picking up food at restaurants and dropping off the delivery, 95% of Serve's time is spent on busy sidewalks with pedestrians. My goal was to express Serve's intentions through lights, sounds, and motion in order to make these interaction safe, understandable, and enjoyable.</p>
            ],
            alternatingContent: [
                {
                    text: [
                        <h3>Lighting design</h3>, 
                        <p>For the eyes and strip, I soldered together a hardware prototype and created the animations that run on the micro-controller.</p>
                    ],
                    content: {
                        width: '40%',
                        video: require('./assets/video/LED_small.mp4').default,
                    }
                },
                {
                    text: [
                        <h3>Sound design</h3>, 
                        <p>Communicating intent through sound can be difficult. I created a prototype python script that conveys the rovers speed into a modulated sound so that people would be made aware of it's speed and positions.</p>
                    ],
                    content: {
                        width: '50%',
                        img: require('./assets/img/runningSound.png').default,
                    }
                },
                {
                    text: [
                        <h3>Motion design</h3>, 
                        <p>I designed motion strategies that use 4 wheels and car like steering to better communicate Serve's intent to pedestrians.</p>
                    ],
                    content: {
                        width: '50%',
                        img: require('./assets/img/movement.png').default,
                    }
                },
            ]
        },
        {
            component: 'AlternatingContent',
            startReversed: true,
            alternatingContent: [
                {
                    text: [
                        <h3>Transactional design: How to interact with Serve</h3>, 
                        <p>Most importantly, people need to get their food from Serve. I designed and developed the touchscreen experience which tested well with users. </p>
                    ],
                    content: {
                        width: '35%',
                        video: require('./assets/video/screenApp_small.mp4').default,
                    }
                }
            ]
        },
        {
            component: 'SplitImage',
            id: 'pilotUI',
            topText: [
                <h5>Piloting UI</h5>, 
                <h1>Driving Serve</h1>, 
                <p>Autonomous vehicles sometimes need help, even more so when navigating a sidewalk with no lanes. I designed a tele-ops interface that allows our fleet of Serves to be monitored by just a couple people. Intervening if necessary.</p>
            ],
            img: require('./assets/img/pilotUI.jpg').default,
            topTextWhite: true,
            backgroundColor: 'black',
        },
        {
            component: 'AlternatingContent',
            backgroundColor: '#EAEBF0',
            id: 'hardware',
            topText: [
                <h1>Hardware design</h1>, 
            ],
            alternatingContent: [
                {
                    text: [
                        <h3>Secure food storage</h3>, 
                        <p>I modeled various designs and 3D prints that were tested against different food configurations. The design that tested best had two cupholders and an offset pizza shelf. This allowed many food combinations to securely fit during deliveries.</p>
                    ],
                    content: {
                        width: '50%',
                        img: require('./assets/img/cargo.png').default,
                    }
                },
                {
                    text: [
                        <h3>CMF - Serve's style</h3>, 
                        <p>When people see a Serve, they instantly recognize our brand. I created a web tool that allowed us to quickly explore new designs and whether they fit our brand.</p>
                    ],
                    content: {
                        width: '50%',
                        img: require('./assets/img/cmf.png').default,
                    }
                },
            ]
        },
        {
            component: 'ProjectFooter',
            text: [
                <h3>How people respond?</h3>, 
                <p>People love Serve! They go bonkers when they see it on the street!</p>
            ],
            textWidth: '500px',
            class: 'fullHeight',
            backgroundImage: require('./assets/img/serveFooterBG.png').default,
            collage: [
                {
                    video: require('./assets/video/crossing_320.mp4').default,
                    width: '300px',
                    top: '10px',
                    left: '-100px'
                },
                {
                    img: require('./assets/img/serveCostume.jpg').default,
                    width: '130px',
                    top: '600px',
                    left: '0'
                },
                {
                    video: require('./assets/video/dayBuyer_320.mp4').default,
                    width: '250px',
                    top: '320px',
                    left: '100px'
                },
                {
                    img: require('./assets/img/serveIntersection.jpg').default,
                    width: '180px',
                    top: '500px',
                    left: '300px'
                },
                {
                    video: require('./assets/video/dayMerchant_320.mp4').default,
                    width: '200px',
                    top: '10px',
                    right: '-100px'
                },
                {
                    video: require('./assets/video/nightMerchantPizza_320.mp4').default,
                    width: '250px',
                    top: '320px',
                    right: '0'
                },
                {
                    img: require('./assets/img/serveDancer.jpg').default,
                    width: '200px',
                    top: '285px',
                    right: '200px'
                },
            ]
        }
    ],
    wiivv: [
        {
            component: 'ProjectHeader',
            class: 'wiivv',
            title: <h1>Dr. Scholl's &#38; Wiivv</h1>,
            subTitle: <h3>The right size, from your phone.</h3>,
            stats: {
                role: {
                    where: <h5>Wiivv</h5>,
                    who: <p>Product design lead</p>,
                    when: <p>2014 - 2018</p>,
                },
                contributions: {
                    title: <h5>My Contributions</h5>,
                    links: [
                        {
                            title: 'Mobile app', 
                            link: 'app'
                        },
                        {
                            title: 'Website',
                            link: 'website'
                        },
                        {
                            title: 'Hardware product',
                            link: 'hardware'
                        }
                    ]
                },
                skills: {
                    title: <h5>Skills used</h5>,
                    text: <p>UI / UX design, user and market research, hardware prototyping and design for mfg.</p>
                },
                readingTime: {
                    title: <h5>Reading time</h5>,
                    text: <p>15 - 20 minutes</p>
                }
            },
        },
        {
            component: 'ProjectIntro',
            title: <h2>Buying shoes online is scary stuff!</h2>,
            description: <p>In 2014, I joined up with our founders in a tiny Vancouver office. Our aim was to use computer vision to allow users to measure their feet at home and shop online with confidence.  We’d start with our own footwear products to test this concept.</p>,
            goals: ['Easy to measure', 'Trustworthy, accurate results', 'Provide comfort', 'Accessible and affordable'],
        },
        {
            component: 'SplitImage',
            id: 'app',
            class: 'noPaddingTop backgroundBottom',
            bottomText: [ 
                <h2>Measurement app</h2>, 
                <p>A mobile app allowing users to take their measurements, learn about their feet and purchase our customized footwear.</p>
            ],
            img: require('./assets/img/wiivv_app_intro.png').default,
            bottomTextWhite: true,
            backgroundImage: require('./assets/img/wiivvWaveBlueGold.svg').default,
        },
        {
            component: 'TabbedContent',
            backgroundColor: '#235EAA',
            content: [
                {
                    TabbedContentConfig: {
                        title: '2015 Version',
                    },
                    component: 'AlternatingContent',
                    backgroundColor: 'white',
                    topText: [
                        <h2>2015 measurement app experience</h2>, 
                        <p>Because there was not much out there for measurement experiences, I used two existing apps as reference: M-Taylor and Normal. We decided to launch a Kickstarter to pre-order the product and use a quick-and-dirty app to fulfil these orders and learn as fast as possible.</p>
                    ],
                    alternatingContent: [
                        {
                            content: {
                                width: '100%',
                                img: require('./assets/img/app1.png').default,
                            }
                        },
                        {
                            text: [
                                <h3>Pain points in this experience</h3>, 
                                <ul>
                                    <li>People loved the video tutorials, but it was difficult to keep track of everything covered.</li>
                                    <li>App flow was too linear and not friendly for returning users.</li>
                                    <li>Didn't scale well for more than one product.</li>
                                </ul>
                            ],
                            content: {
                                width: '40%',
                                img: require('./assets/img/painPoints.png').default,
                            }
                        },
                    ]
                },
                {
                    TabbedContentConfig: {
                        title: '2016 Version',
                    },
                    component: 'AlternatingContent',
                    backgroundColor: 'white',
                    topText: [
                        <h2>2016 measurement app experience</h2>, 
                        <p>After launching our initial app, I was able to learn more about how the app was used and what improvements should be tried. Most of this data came through support emails and various in person observations.</p>
                    ],
                    alternatingContent: [
                        {
                            text: [
                                <h3>Non-linear experience</h3>, 
                                <p>To support more than one product, track orders and manage measurements, I designed the experience around a central home concept.</p>
                            ],
                            content: {
                                width: '60%',
                                img: require('./assets/img/nonLinear.png').default,
                            }
                        },
                        {
                            text: [
                                <h3>Tutorial slider</h3>, 
                                <p>The tutorial videos I made tested well with users, but there was too much information to remember. Instead, I tried a simpler video / text slider that resulted in far less instances of rejected measurements.</p>
                            ],
                            content: {
                                width: '60%',
                                img: require('./assets/img/tutorialSlider.png').default,
                            }
                        },
                    ]
                },
                {
                    TabbedContentConfig: {
                        title: '2017 Version',
                        selected: true
                    },
                    component: 'AlternatingContent',
                    backgroundColor: 'white',
                    topText: [
                        <h2>2017 measurement app experience</h2>, 
                        <p>Building on the foundation of the 2016 version of the app, I was able to greatly improve the experience resulting in increased account and purchase conversions. This was made possible with our partnership with Bayer: Dr. Scholl's, which allowed us to invest in user-research and better technology.</p>
                    ],
                    alternatingContent: [
                        {
                            text: [
                                <h3>How order matters</h3>, 
                                <p>Users didn't understand the value of the product or the value of creating an account. Starting with measurements instead showed users why our product is unique and why a user account matters.</p>
                            ],
                            content: {
                                width: '60%',
                                img: require('./assets/img/orderMatters.png').default,
                            }
                        },
                        {
                            text: [
                                <h3>Deep-learning driven experience</h3>, 
                                <p>What’s better than giving instructions on how to take a good photo? Why not guide them through each step with the help of computer-vision! My design helped increase accuracy of measurements. Users I tested also felt that the process was more trustworthy as they have visibility into the technology and reassurance that it was working.</p>
                            ],
                            content: {
                                width: '40%',
                                img: require('./assets/img/cvCapture.png').default,
                            }
                        },
                    ]
                },
            ]
        },
        {
            component: 'SplitImage',
            bottomColor: '#EAEBF0',
            bottomColorHeight: '50%',
            html: <div className={`awardsBoxMain`}>
                <img className={`awardFG`} src={require('./assets/img/awardFG.png').default} />
                <img className={`awardBG`} src={require('./assets/img/awardBG.png').default} />
                <div className={`awardsBox`}>
                    <h3>Awards</h3> 
                    <p>In 2016, I entered my app designs into the Vancouver UX awards. I pitched at the event with a live-app demo and we ended up taking home two awards:</p>
                    <div className={`awards`}>
                        <a target={'_blank'} href={'https://medium.com/leotohyama/report-vancouver-user-experience-awards-2016-71cc7a4fa86b#a976'}>🥇 Best UX Overall</a>
                        <a target={'_blank'} href={'https://medium.com/leotohyama/report-vancouver-user-experience-awards-2016-71cc7a4fa86b#5b68'}>🥇 Best UX for Product</a>
                    </div>
                </div>
            </div>,
        },
        {
            component: 'SplitImage',
            id: 'website',
            class: 'textWide wiivvWebsiteOverlay backgroundTop',
            topText: [ 
                <h2>Website</h2>, 
                <p>As our product offerings expanded and got way cooler, having a richer web experience where you can customize, order and learn about the product became more important.</p>,
            ],
            bottomText: [
                <p>A few of my main contributions to the web design / experience were:</p>,
                <ul>
                    <li>An expanding product nav-bar, which tested best with users in finding a product that fit their needs.</li>
                    <li>Messaging tested around clarity and credibility as well as understanding the process.</li>
                </ul>
            ],
            img: require('./assets/img/wiivv_website_intro.png').default,
            overlayIMG: require('./assets/img/wiivv_website_overlay.png').default,
            backgroundImage: require('./assets/img/wiivvWaveGrey.svg').default,
        },
        {
            component: 'SplitImage',
            id: 'hardware',
            class: 'centerText textWide noPaddingBottom backgroundTop',
            topText: [ 
                <h2>Hardware product design</h2>, 
                <p>The website and app help get your measurements to build your product. I was the principle designer for the main insole product and made large contributions to the sandal and package experiences as well.</p>
            ],
            subComponent: {
                component: 'ExpandingCards',
                class: 'wiivv paddingTopBottom75',
                nested: true,
                cards: [
                    {
                        title: 'Custom insoles',
                        img: require('./assets/img/cardInsole.png').default,
                        subText: 'Insoles taylor-made to your feet and lifestyle.',
                        content: <>
                            <div className={`intro`}>
                                <img className={`overflow`} src={require('./assets/img/hardwareInsoleMain.png').default} />
                                <div className={`intoText`}>
                                    <p>Our main product, a custom insole created from the measurements users took in our app.</p>
                                    <p>I designed the insoles in Blender and created the tools to easily generate 3D printable designs.</p>
                                    <ul>
                                        <li>3D printed, flexible nylon-12 shell, fitted to the users measurements and optimized for comfort.</li>
                                        <li>Custom poly-urethane foam with a micro-wicking fabric laminated to the top of the shell.</li>
                                        <li>Shell colour and pattern chosen by user.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareInsole1.jpg').default} />
                                <p>Insole production and final product. Each one made unique to their users chosen design and comfort needs. Special markings were used to help the production team track orders and assembly. The end users name was also added to the top and bottom of each pair.</p>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareInsole2.jpg').default} />
                                <p>First iteration of our insole product. This iteration helped us validate and start to understand what users preferred when it came to comfort. From this design, we decided that the heel cup was too high and that the forefoot did not need to be printed in nylon.</p>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareInsole3.jpg').default} />
                                <p>Tommy Europe, Linda Wong and Martha McCabe were amongst the first 100 users ranging from Canadian Olympic athletes, stunt actors, to everyday casual-users in a clinical trial to quantify comfort.</p>
                            </div>
                        </>
                    },
                    {
                        title: 'Custom sandals',
                        img: require('./assets/img/cardSandal.png').default,
                        subText: 'The most comfortable sandals made to your feet.',
                        content: <>
                            <div className={`intro`}>
                                <img className={`overflow`} src={require('./assets/img/hardwareSandalMain.png').default} />
                                <div className={`intoText`}>
                                    <p>The most comfortable sandal, made to you!</p>
                                    <p>My main challenge was to figure out how to get a 3D printed arch to reliably fit into the product while still looking good and offering the same level of comfort for each user. </p>
                                    <ul>
                                        <li>The sandal is offered in feminine and masculine styling / sizing, although you are free to choose either.</li>
                                        <li>Size is chosen from user measurements and the strap / 3d printed arch insert is also created custom to these.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareSandal1.jpg').default} />
                                <p>My final design that worked best featured a lip that holds it in place, a gasket like section to seel the lip off from debris, an intentionally open cavity allowing compression and expulsion of debris and a flowing outer lip. It was the best of both worlds, functional and the most visually pleasing as well.</p>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareSandal2.jpg').default} />
                                <p>The 2nd to final iteration was close! We realized that it made more sense to separate sandal upper into 2 parts, allowing for a softer foot-bed. This would create a cavity that the arch could be inserted into.</p>
                                <p>Although this was the closest, I learned that the users could feel the hard lip at the very edge pressing into their foot. This was made worse because the arch could not compress due to the side waterfall, necessary to keep it sealed from debris.</p>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareSandal3.jpg').default} />
                                <p>We took out the extensions and created only an arch insert this time. My best attempt was to secure it with mushroom like pegs into corresponding holes. This iteration was still not comfortable for users, the hard plastic under the foot could never be comfortable and the method i had chosen to secure the insert would pop out due to flex, no matter how much glue was used.</p>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwareSandal4.jpg').default} />
                                <p>Our first thinking was to have the 3D printed part to be much larger, holding a tow thong and to be exposed on the top. This required too much thickness in teh foot-bed, and provided no flexibility.</p>
                            </div>
                        </>
                    },
                    {
                        title: 'Packaging',
                        img: require('./assets/img/cardPackaging.png').default,
                        subText: 'Sustainable and functional packaging.',
                        content: <>
                            <div className={`intro`}>
                                <img className={``} src={require('./assets/img/hardwarePackagingMain.png').default} />
                                <div className={`intoText`}>
                                    <p>Like with other D2C products that primarily sell online and through apps (Casper, Tushy, Care/of, BOTM, etc), we had to have a good out-of-box experience. The main challenge was that the product was always a unique shape.</p>
                                    <ul>
                                        <li>Packaging should to be sustainable, yet durable and shippable.</li>
                                        <li>The concept of a tailored experience was brought into the package such as printing their names and signing each package card. </li>
                                        <li>Out-of-box experience needed to be informative with care and how-to information.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwarePackaging1.jpg').default} />
                                <p>Previous iteration of packaging. Was informative and met many legal requirements where we were to ship our products too. A card had unique printing of the users name, and each one was signed with a promise of quality assurance.</p>
                                <p>The only issue with this design was that it was wasteful. We could not ship the box, it needed to go into an additional “shipper” much like how you would receive goods form Amazon. And each one needed to be assembled and stored on the manufacturing store with many parts. Our final iteration after that was a simple biodegradable resealable pouch that could be directly shipped as well, saving valuable production resources, space while being more sustainable.</p>
                            </div>
                            <div className={`imageSection`}>
                                <img src={require('./assets/img/hardwarePackaging2.jpg').default} />
                                <p>The first iteration of our packaging. We only had a 3/4 length insole product at that time. This box was used to ship out all of our Kickstarter orders, features a printed sticker with the users name and the details of the order, as well as a helpful wearing-and-caring tri-fold. The design was fun, but a bit too quirky and the box needed to be more simple and ridged to survive shipping.</p>
                            </div>
                        </>
                    }
                ]
            },
            backgroundImage: require('./assets/img/wiivvWaveBlue.svg').default,
        },
        {
            component: 'ProjectFooter',
            text: [
                <h3>Thanks for reading!</h3>, 
                <p>Although we never did end up becoming the solution to online shoe retail, we were still able to offer a unique experience tailored to each person, solved real problems, and taught me valuable skills.</p>
            ],
            backgroundColor: '#235EAA',
            textColor: 'white'
        }
    ]
}

export default Content;