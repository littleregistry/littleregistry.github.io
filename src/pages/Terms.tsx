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
        <a href="/">
      <img src={logo} alt="logo" width="200" height="100" />
      </a> 
    
    <div className="min-h-screen ">
      <h1 className="text-4xl text-center p-2 font-bold">Terms & Conditions</h1>
      <p className="text-center p-2">Last Updated: 04 August, 2025</p>
      
      <div className="px-20 py-10">
      <h2 className="text-2xl font-semibold">1. Introduction:</h2>
      <br/>
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
     <br/>
     <div>
     All content, trademarks, logos, and other intellectual property displayed on our website or included in our products and services are the property of Little Registry or its licensors. You may not use, reproduce, or distribute any of our intellectual property without our prior written consent.
     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">3. Privacy Policy</h2>
     <br/>
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
        <br/>
     To the fullest extent permitted by applicable law, Little Registry, its owners, developers, affiliates, and partners shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to loss of profits, revenue, data, or other intangible losses arising from:

     <br/>
<b>1. Your Use of the App</b>: This includes any issues with the functionality, performance, or availability of the app.
<br/>
<b>2. Errors or Omissions</b>: Any errors, inaccuracies, or omissions in the app’s features, content, or services.
<br/>
<b>3. Third-Party Services</b>: Any interactions with or reliance on third-party services or platforms integrated with the app, such as Shopify or payment processors.
<br/>
<b>4. Unauthorized Access</b>: Any unauthorized access to or use of your data stored or transmitted through the app.
<br/>
<b>5. Termination or Suspension</b>: Suspension, modification, or termination of your access to the app.
<br/>
<br/>
Little Registry is provided "as-is" and "as-available," with no warranties or guarantees of uninterrupted or error-free operation. By using the app, you agree that your sole remedy for dissatisfaction with the app is to discontinue its use.
<br/>
<br/>
This limitation of liability applies regardless of the legal theory under which any claim is brought and even if Little Registry has been advised of the possibility of such damages.

Some jurisdictions do not allow limitations of liability for certain types of damages, so some of the above limitations may not apply to you. In such cases, liability will be limited to the fullest extent permitted by applicable law.
     </div>
     <div>

     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">5. Indemnification</h2> 
     <div>
        <br/>
     By using Little Registry, you agree to indemnify, defend, and hold harmless Little Registry, its owners, developers, affiliates, partners, and employees from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorney's fees) arising out of or related to:
     <br/>
     <br/>
<b>1. Your Use of the App</b>: Any misuse, unauthorized use, or violation of applicable laws or regulations related to your use of Little Registry.
<br/>
<b>2. Your Content</b>: Any data, information, or content you submit, store, or transmit through the app, including claims of infringement or violation of intellectual property rights, privacy rights, or other third-party rights.
<br/>
<b>3. Breach of Terms</b>: Your breach or alleged breach of these Terms of Service or any applicable laws or regulations.
<br/>
<b>4. Third-Party Disputes</b>: Any disputes or claims arising from your interactions with third parties, including your customers or other users of your Shopify store.
<br/>
<br/>
Little Registry reserves the right, at your expense, to assume exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims. You may not settle any matter without our prior written consent.

This obligation to indemnify survives termination or suspension of your use of the app and these Terms of Service.
     </div>
     </div>

     <div className="px-20 py-10">
     <h2 className="text-2xl font-semibold">6. Modifications to Terms</h2> 
     <br/>
     <div>
     Little Registry reserves the right to update, modify, or revise these Terms of Service at any time. If changes are made, we will provide notice by posting the updated Terms of Service on our website or within the app, and the "Last Updated" date at the top of this document will be revised accordingly.
<br/>
<br/>
It is your responsibility to review these Terms periodically for any updates or changes. Continued use of the app following the posting of changes constitutes your acceptance of the modified Terms of Service.
<br/>
<br/>
If you do not agree to the updated Terms, you must stop using Little REgistry immediately and uninstall the app from your Shopify store.
<br/>
<br/>
For significant changes that may affect your rights or obligations, we will make reasonable efforts to notify you directly, such as through email or a notification within the app.
     </div>
     </div>

     

    </div>
    </div>   
    </section>    
  );
};

export default Index;
