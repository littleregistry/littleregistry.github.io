import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import logo from "@/assets/logo-lr.svg"

const Index = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      
      <div className="container mx-auto px-6 py-20 relative z-10">      
      <img src={logo} alt="logo" width="200" height="100" />
    
    <div className="min-h-screen ">
      <h1 className="text-4xl text-center p-2 font-bold">Terms & Conditions</h1>
      <p className="text-center p-2">Last Updated: 04 August, 2025</p>
      
      <div className="px-20 py-10">
      <h2 className="text-2xl font-semibold">1. Introduction:</h2>
      <div>
        Thank you for choosing Little Registry as your Shopify gift registry solution! We’re thrilled to help you provide your customers with a seamless and personalized gift registry experience. Before you get started, please take a moment to read through our Terms of Service.
        <br/>
        These Terms of Service outline the rules, rights, and responsibilities governing your use of Little Registry. By installing or using our app, you agree to these terms, so it’s important to understand what they entail.
        <br/>
        Our goal is to make your experience smooth and transparent. If you have any questions or concerns about these terms, don’t hesitate to reach out to our support team at hello@littleregistry.com
        <br/>
        Now, let’s make gift-giving even more delightful for your customers!
     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
     <div>
     All content, trademarks, logos, and other intellectual property displayed on our website or included in our products and services are the property of Little Registry or its licensors. You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.
     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">3. Privacy Policy</h2>
     <div>
     Little Registry "the App" provides a gift registry service to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.
        <br/>
        <br/>
    We collect personal information directly from the relevant individual, through your Shopify account, or using the following technologies:
    
    <br/>
    - Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, visit http://www.allaboutcookies.org.
    <br/>
    - Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
    <br/>
    <br/>

    <h3 className="text-xl font-medium">What kind of personal information do we collect?</h3>

    <div>
    When you install Little Registry, we are automatically able to access certain types of information from your Shopify account:
    <br/>

Additionally, we collect information about you and others who may access the App on behalf of your store, such as your name, address, email address, phone number, and billing information, for our records, as well as to have a means of contacting you should any problem arise.
<br/>
- Your order information
<br/>
- Your product information
<br/>
- Your customer information
<br/>
Additionally, we collect information about you and others who may access the App on behalf of your store, such as your name, address, email address, phone number, and billing information, for our records, as well as to have a means of contacting you should any problem arise.
    </div>
    <br/>
    <h3 className="text-xl font-medium">How we use your personal information?</h3>
    <div>
    We use the personal information we collect from you in order to operate the App. Additionally, we use this personal information to: Communicate with you; Optimize or improve the App; and provide you with information or advertising relating to our products or services.
    <br/>
We do not share your personal information, or information about your store or clients with any third parties outside our company, without being part of fulfilling a business need you may have. (e.g. we will dislcose the shipping details of a registrant to parties who require an order be shipped to a registrant)
<br/>
We may also share your personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
<br/>
    </div>

     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
     <div>

     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">5. Indemnification</h2> 
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">6. Modifications to Terms</h2> 
     </div>

     

    </div>
    </div>   
    </section>    
  );
};

export default Index;
