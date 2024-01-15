import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ServiceSummary } from 'layouts/Home/ServiceSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.GA4_KEY;
const disciplines = ['DevSecOps', 'Pentest', 'Red Team', ' CTI', 'Training'];



export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const ServiceOne = useRef();
  const ServiceTwo = useRef();
  const ServiceThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, ServiceOne, ServiceTwo, ServiceThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Cyber Security"
        description="Portfolio of Diogo Salvador — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      >
      </Meta>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ServiceSummary
        id="service-1"
        sectionRef={ServiceOne}
        visible={visibleSections.includes(ServiceOne.current)}
        index={1}
        title="DevSecOps Engineering"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View Service"
        buttonLink="/services/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ServiceSummary
        id="service-2"
        alternate
        sectionRef={ServiceTwo}
        visible={visibleSections.includes(ServiceTwo.current)}
        index={2}
        title="Penetration Testing"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [gamestackTexture, gamestackTextureLarge],
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: [gamestackTexture2, gamestackTexture2Large],
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ServiceSummary
        id="service-3"
        sectionRef={ServiceThree}
        visible={visibleSections.includes(ServiceThree.current)}
        index={3}
        title="Red Team"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Service"
        buttonLink="/services/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ServiceSummary
        id="service-4"
        alternate
        sectionRef={ServiceThree}
        visible={visibleSections.includes(ServiceThree.current)}
        index={4}
        title="Threat Hunting"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Service"
        buttonLink="/services/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ServiceSummary
        id="service-5"
        sectionRef={ServiceThree}
        visible={visibleSections.includes(ServiceThree.current)}
        index={3}
        title="Training & Awareness"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Service"
        buttonLink="/services/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ServiceSummary
        id="service-3"
        alternate
        sectionRef={ServiceThree}
        visible={visibleSections.includes(ServiceThree.current)}
        index={3}
        title="Bug Bounty Program Management"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View Service"
        buttonLink="/services/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
