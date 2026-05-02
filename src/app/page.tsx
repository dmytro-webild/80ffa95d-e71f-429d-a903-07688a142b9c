"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="medium"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Cuts and Coiffure"
      button={{
        text: "Book Now",
        href: "https://wa.me/21265502927",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Excellence in Beauty"
      description="Professional hairstyling and beauty treatments for your ultimate transformation."
      buttons={[
        {
          text: "Book WhatsApp",
          href: "https://wa.me/21265502927",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/photo-two-black-ceramical-hair-sinks-standing-beaty-salon_651396-960.jpg",
          imageAlt: "Salon Hero 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lodge-wintertime-with-ski-gear_482257-76632.jpg",
          imageAlt: "Salon Hero 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-consulting-client-salon_23-2147769879.jpg",
          imageAlt: "Salon Hero 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379234.jpg",
          imageAlt: "Salon Hero 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230928.jpg",
          imageAlt: "Salon Hero 5",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-her-hair-done-beauty-salon_23-2149167391.jpg",
          imageAlt: "Salon Hero 6",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="Beauty with Care"
      description="At Cuts and Coiffure, we combine artistry with the best industry products to ensure you leave feeling revitalized."
      subdescription="With years of expertise, our team is dedicated to personalized beauty care tailored for you."
      imageSrc="http://img.b2bpic.net/free-photo/man-presenting-necklace-charming-woman_23-2147736699.jpg"
      mediaAnimation="opacity"
      icon={Sparkles}
      imageAlt="Smiling beautician holding brushes"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      features={[
        {
          title: "Hair Styling",
          description: "Precision haircuts, blowouts, and professional styling.",
          imageSrc: "http://img.b2bpic.net/free-photo/model-career-kit-still-life-top-view_23-2150217979.jpg",
        },
        {
          title: "Coloring",
          description: "Expert color treatments, highlights, and custom balayage.",
          imageSrc: "http://img.b2bpic.net/free-photo/instruments-used-latino-hair-salon_23-2150555181.jpg",
        },
        {
          title: "Treatments",
          description: "Deep conditioning, scalp care, and repair treatments.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-shiny-metallic-scissors_23-2148741901.jpg",
        },
      ]}
      title="Salon Services"
      description="Explore our comprehensive range of beauty and styling treatments."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The best beauty salon experience! My hair has never looked better."
      rating={5}
      author="Amira S."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-pink-sweater-smiling-vintage-lights_114579-81359.jpg",
          alt: "Happy woman hair salon",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sensual-glamour-beautiful-woman-model-with-fresh-daily-makeup-with-nude-lips-color-clean-healthy-skin-face_158538-13990.jpg",
          alt: "Elegant woman hair color",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-woman-studio_1157-17095.jpg",
          alt: "Beautiful woman in the studio",
        },
        {
          src: "http://img.b2bpic.net/free-photo/funny-joyful-woman-makes-face-palm-laughs-something-wears-hair-curlers-makes-perfect-hairstyle-wears-dressing-gown-poses-against-pink-wall-women-grooming-home-style-concept_273609-40011.jpg",
          alt: "Joyful woman with curlers",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-holding-brush-staring-ahead-white-wall_114579-49568.jpg",
          alt: "Young woman holding brush",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "How to book?",
          content: "Book directly through our WhatsApp link on this site.",
        },
        {
          id: "2",
          title: "Do you take walk-ins?",
          content: "Appointments are highly recommended for optimal care.",
        },
        {
          id: "3",
          title: "Where are you located?",
          content: "Contact us for precise location details via WhatsApp.",
        },
      ]}
      title="Common Questions"
      description="Find answers to your booking or service questions here."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to transform your look? Book your appointment via WhatsApp today."
      buttons={[
        {
          text: "Book WhatsApp",
          href: "https://wa.me/21265502927",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Cuts and Coiffure"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Booking",
              href: "https://wa.me/21265502927",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Cuts and Coiffure. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
