import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Banner, TextWithBanner, Specification, Whatsapp } from '@/components/moleclues'
import { HeaderWrapper, CardsWrapper, ProductDescWrapper, ContactUs, ProductsList, ProductSpecificationWrapper, TestimonialWrapper, Footer } from '@/components/organisms'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeaderWrapper />
      <Banner />
      <div
        className="light-primary large-m-b-120 m-b-60"
      >
        <div className="grid-container">
          <div className="grid-x">
            <div className="cell">
              <CardsWrapper />
            </div>
          </div>
        </div>
      </div>
      <TextWithBanner/>
      <ProductDescWrapper />
      <Specification/>
      <ContactUs/>
      <ProductsList/>
      <ProductSpecificationWrapper/>
      <TestimonialWrapper/>
      <Footer/>
      <Whatsapp/>
    </div>
  );
}
