const Content = {
    home: [
        {
            component: 'header',
            title: <h1>Defining the new and emerging user experiences</h1>,
            subTitle: <h5>Enger Bewza: Product designer</h5>,
            button: {
                text: 'View my work',
                href: '#content',
                action: 'scrollTo'
            },
            mainImage: require('./assets/img/img.jpg').default,
            secondImage: require('./assets/img/img.jpg').default,
            thirdImage: require('./assets/img/img.jpg').default
        },
        {
            component: 'content',
            id: 'content',
            projects: [
                {
                    title: <h3>Robots that deliver your food</h3>,
                    text: <p>Serve, the autonomous delivery rover that safely navigates sidewalks today delivering food from restaurants to your door.</p>,
                    href: '/serve',
                    demoVideo: require('./assets/vid/mp4.mp4').default,
                    demoShape: 'talkBubble'
                },
                {
                    title: <h3>The right size, from your phone</h3>,
                    text: <p>Ever buy shoes online only to realize they don't fit? Ya, that sucks. Dr. Scholl's 3D and Wiivv are a step in the right direction.</p>,
                    href: '/wiivv',
                    demoImage: require('./assets/img/img.jpg').default,
                    overlayImage: require('./assets/img/img.png').default
                }
            ]
        },
        {
            component: 'countdownFeatures',
            title: <h3>A few things I do</h3>,
            features: [
                {
                    title: <h4>UX / UI design</h4>,
                    text: <p>From logic flows, prototypes to UI design, design-systems and dev handoffs.</p>,
                    demoVideo: require('./assets/vid/mp4.mp4').default, 
                },
                {
                    title: <h4>Physical product and CMF</h4>,
                    text: <p>Laser cut and 3D printed prototypes all the way to finished product along with packaging.</p>,
                    demoVideo: require('./assets/vid/mp4.mp4').default, 
                },
                {
                    title: <h4>Dev work</h4>,
                    text: <p>Web-dev, real prototypes, and even C code for embedded systems.</p>,
                    demoVideo: require('./assets/vid/mp4.mp4').default, 
                },
            ]
        }, 
        {
            component: 'footer',
            headshot: require('./assets/img/img.jpg').default,
            title: <h3>Enger Bewza: Bay area product designer</h3>,
            text: <p>Hello! Thanks for checking out my work!</p> 
                <p>I started learning 3D modeling back in 2005. I also built games and websites in my free time. I went to school for 3D Design in 2011 and was eventually  drawn into  product design. I enjoy keeping up with the latest design trends, dev libraries and coolest hardware, but being able to connect the dots and build something people want is the most exciting part.</p>
                <p>I'm passionate about working on the most challenging and undefined products, with cool people. Right now that's the X team at Postmates building our robot product. </p>,
            resumeButton: {
                text: 'Download résumé',
                href: require('./assets/docs/resume.pdf').default, 
                target: '_blank',
                icon: {
                    image: require('./assets/img/img.png').default,
                    type: 'overflowRight' 
                }
            },
            emailButton: {
                text: 'Email me',
                href: '',
                target: '...',
                icon: {
                    image: require('./assets/img/img.png').default,
                    type: 'overflowRight' 
                }
            },
            social: [
                {
                    alt: 'Linkedin',
                    image: require('./assets/img/img.png').default,
                    href: '',
                },
                {
                    alt: 'Github',
                    image: require('./assets/img/img.png').default,
                    href: '',
                },
                {
                    alt: 'Codepen',
                    image: require('./assets/img/img.png').default,
                    href: '',
                },
                {
                    alt: 'Behance',
                    image: require('./assets/img/img.png').default,
                    href: '',
                },
            ]
        }
    ],
    serve: [
        {
            component: 'projectHeader',
            class: 'serve',
            title: <h1>Serve: The autonomous delivery robot.</h1>,
            subTitle: <h3>Safely navigates sidewalks today delivering food from restaurants to your door.</h3>,
            stats: {
                role: {
                    where: <h3>Postmates X</h3>,
                    who: <p>Product designer</p>,
                    when: <p>2018 - Today</p>,
                },
                contributions: {
                    title: <h3>My Contributions</h3>,
                    contributions: [
                        {
                            title: 'Sidewalk UI', 
                            action: 'scrollTo',
                            href: '#sidewalkUI'
                        },
                        {
                            title: 'Piloting UI',
                            action: 'scrollTo',
                            href: '#pilotUI'
                        },
                        {
                            title: 'Hardware and CMF',
                            action: 'scrollTo',
                            href: '#hardware'

                        }
                    ]
                },
                skills: {
                    title: <h3>Skills used</h3>,
                    text: <p>UI / UX design, harware prototyping, software dev, user-research</p>
                },
                readingTime: {
                    title: <h3>Reading time</h3>,
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