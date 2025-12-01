

import React from 'react';
import '../styles/Faqs.css'; 

const Faqs = () => {
  return (
    <section className="faqs-section py-5">
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{
            color: '#a37a42',
            fontWeight: '600',
            fontSize: '2.2rem',
          }}
        >
          Frequently Asked Questions
        </h2>

     
        <div className="faq-accordion mx-auto" style={{ maxWidth: '900px' }}>
          
       
          <details className="faq-item mb-3 border rounded shadow-sm" open>
            <summary className="faq-question fw-semibold">
              What is the return policy?
            </summary>
            <div className="faq-answer">
              You can return any item within <strong>30 days</strong> of delivery if it's unused and in original packaging with tags attached.
            </div>
          </details>

        
          <details className="faq-item mb-3 border rounded shadow-sm">
            <summary className="faq-question fw-semibold">
              How can I track my order?
            </summary>
            <div className="faq-answer">
              You’ll receive a tracking link via email & SMS as soon as your order ships. You can also track it from your account → Orders section.
            </div>
          </details>

         
          <details className="faq-item mb-3 border rounded shadow-sm">
            <summary className="faq-question fw-semibold">
              Do you offer international shipping?
            </summary>
            <div className="faq-answer">
              Yes! We ship to USA, UK, Canada, Australia, UAE, Singapore & 20+ countries. Delivery takes 7–15 days.
            </div>
          </details>

      
        </div>
      </div>
    </section>
  );
};

export default Faqs;