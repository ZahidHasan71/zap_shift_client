import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='max-w-2xl mx-auto text-center'>
                <h1 className='text-secondary text-3xl font-bold'>Frequently Asked Question (FAQ)</h1>
                <p className='text-black mt-4'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className="max-w-5xl mx-auto mt-10" >
                <div className="collapse collapse-arrow bg-base-100 border border-secondary my-3">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold text-secondary">How does this posture corrector work?</div>


                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-secondary my-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-secondary my-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-secondary my-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Does it have smart features like vibration alerts?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-secondary my-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How will I be notified when the product is back in stock?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
        </div>
    );
};

export default Faq;