import { useState } from "react";


const ContectForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send form data to the server
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <section className="">
            <div className="bg-green-200 text-center py-8">
          <h1 className="text-4xl font-semibold items-start text-text_secondary">
          Contect Form
          </h1>
        </div> 
            <div className="contact-form items-center justify-center p-6 ">
            
            <form className="w-[600px] h-full " onSubmit={handleSubmit}>
                <div className="form-group w-full h-full object-contain pb-6">
                    <label htmlFor="name">Name</label>
                    <input className="w-full h-10  object-cover"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group pb-6">
                    <label htmlFor="email">Email</label>
                    <input className="w-full h-10  object-cover"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group pb-6">
                    <label htmlFor="subject">Subject</label>
                    <input className="w-full h-10  object-cover"
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group pb-6">
                    <label htmlFor="message">Message</label>
                    <textarea className="w-full h-10  object-cover"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button className="btn btn-ghost bg-text_secondary text-white" type="submit">Submit</button>
            </form>
        </div>
            </section>

            
        </div>
       
    );
};

export default ContectForm;