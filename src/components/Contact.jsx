import { useState } from "react";
import './Contact.css';
import buildingIcon from '../assets/icon-building.svg';
import phoneIcon    from '../assets/icon-phone.svg';
import mailIcon     from '../assets/icon-mail.svg';


function validateFields(formData) {
    const errors = {};

    if (!formData.name.trim()) {
        errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
        errors.message = "Message is required";
    }

    return errors;
}

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const errors = validateFields(formData);
    const [touched, setTouched] = useState({ name: false, email: false, message: false });

     const showNameError    = touched.name    && errors.name;
     const showEmailError   = touched.email   && errors.email;
     const showMessageError = touched.message && errors.message;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                {/* Info Section */}
                <div className="contact-info">
                    <div className="contact-info__text">
                        <h2 className="contact-info__heading">Talk to our team</h2>
                        <p className="contact-info__subtitle">
                            We&rsquo;re committed to delivering the support you require to make
                            your experience as smooth as possible.
                        </p>
                    </div>
                    <ul className="contact-info__details">
                        <li className="contact-info__item">
                            <div className="contact-info__icon-badge">
                                <img src={buildingIcon} alt="" />
                            </div>
                            <span>123 Maple Street, Springfield, IL, USA</span>
                        </li>
                        <li className="contact-info__item">
                            <div className="contact-info__icon-badge">
                                <img src={phoneIcon} alt="" />
                            </div>
                            <span>+1 (650) 555-0198</span>
                        </li>
                        <li className="contact-info__item">
                            <div className="contact-info__icon-badge">
                                <img src={mailIcon} alt="" />
                            </div>
                            <span>hello@abstractly.com</span>
                        </li>
                    </ul>
                </div>

                {/* Form Section */}
                <div className="contact-form-card">
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="contact-form__fields">
                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="name">Name</label>
                                    <input
                                        className="contact-form__input"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={!!showNameError}
                                        aria-describedby={showNameError ? 'name-error' : undefined}
                                    />
                                    {showNameError && <p id="name-error" className="contact-form__error">{errors.name}</p>}
                                </div>
                                <div className="contact-form__group">
                                    <label className="contact-form__label" htmlFor="email">Email</label>
                                    <input
                                        className="contact-form__input"
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="example@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={!!showEmailError}
                                        aria-describedby={showEmailError ? 'email-error' : undefined}
                                    />
                                    {showEmailError && <p id="email-error" className="contact-form__error">{errors.email}</p>}
                                </div>
                            <div className="contact-form__group contact-form__group--message">
                                <label className="contact-form__label" htmlFor="message">Message</label>
                                <textarea
                                    className="contact-form__input contact-form__input--textarea"
                                    id="message"
                                    name="message"
                                    placeholder="Write your message..."
                                    maxLength={500}
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={!!showMessageError}
                                    aria-describedby={showMessageError ? 'message-error' : undefined}
                                ></textarea>
                                <p className="contact-form__hint">{formData.message.length}/500</p>
                                {showMessageError && <p id="message-error" className="contact-form__error">{errors.message}</p>}
                            </div>
                        </div>
                        <button className="btn btn--primary contact-form__submit" type="submit">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;