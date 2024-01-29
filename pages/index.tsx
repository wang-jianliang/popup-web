import Head from 'next/head'
import Benefits from '../blocks/Benefits';
import Break from '../blocks/Break';
import Epilogue from '../blocks/Epilogue';
import Features from '../blocks/Features';
import Footer from '../blocks/Footer';
import Header from '../blocks/Header';
import Hero from '../blocks/Hero';
import Highlights from '../blocks/Highlights';
import Notice from '../components/Notice';
import * as Global from '../global/global.json';

const LOREM = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type
  specimen book.
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Global.product}</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <Notice id="subscribed">Thank you for subscribing</Notice>
      <Header id="top" title={Global.product}/>

      <main>
        <Hero
          title="Popup - your omnipresent AI assistant for the web."
          subtitle='Popup allows you to invoke an AI assistant at any location on a webpage, and respond based on the content you select.'
          illustration="../../showcase1.png"
          // subscribePlaceholder="you@email.com"
          // subscribeAction="Join to the waitlist"
        />

        <Benefits
          background="alternate"
          title="How to use Popup?"
          subtitle="Popup adds AI agents to your right-click menu. Select any text on a webpage, right-click, and select the agent you want to invoke."
          benefits={[
            {illustration:'../../showcase2.png', title:'Activate the agent', text:'Select the content and choose an agent in the right-click menu'},
            {illustration:'../../showcase3.png', title:'Chat about your selection', text:'The agent will activate and chat with you about your selection'},
            {illustration:'../../showcase4.png', title:'Continue your conversations', text:'You can find your conversations in the side panel and continue chatting with the agent'},
          ]}
        />

        {/*<Break*/}
        {/*  title="Risk Reduction: Try Product free for 14 days"*/}
        {/*  subtitle="This is an in-betwen CTA for visitors that already got convinced."*/}
        {/*  illustration=""*/}
        {/*  action="When is it ready?"*/}
        {/*  onActionClick={() => window.scrollTo({top:99999, behavior:'smooth'})}*/}
        {/*/>*/}

        {/*<Highlights*/}
        {/*  title="Highlights of your product"*/}
        {/*  subtitle="Explain why your solution deserves attention"*/}
        {/*  highlights={[*/}
        {/*    {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},*/}
        {/*    {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},*/}
        {/*    {illustration:'', title:'Now go deeper into what your product offers. Word it as benefits, not as features', text:'“Save your favorite links” is a feature. “Never lose your favorite websites again” is a benefit. Users don’t care about your product, they only care about what’s in it for them.'},*/}
        {/*  ]}*/}
        {/*/>*/}

        {/*<Features*/}
        {/*  background="alternate"*/}
        {/*  title="But wait, there is more"*/}
        {/*  subtitle="Describe the full extent of your product"*/}
        {/*  features={[*/}
        {/*    {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},*/}
        {/*    {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},*/}
        {/*    {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},*/}
        {/*    {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},*/}
        {/*    {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},*/}
        {/*    {illustration:'', title:'Product feature', text:'Brief explanation of why and how this feature will help your customers'},*/}
        {/*  ]}*/}
        {/*/>*/}

        {/*<Epilogue*/}
        {/*  title="Ask if your visitor wants to solve problem X today"*/}
        {/*  subtitle="Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take"*/}
        {/*  illustration=""*/}
        {/*  subscribePlaceholder="you@email.com"*/}
        {/*  subscribeAction="When is it ready?"*/}
        {/*/>*/}
      </main>

      <Footer
        title={Global.product}
      />
    </div>
  )
}
