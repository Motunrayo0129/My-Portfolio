import { Facebook, Linkedin, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import {cn} from "@/libs/utils";
import {useToast} from "@/hooks/use-toast"
import { useState } from "react";

export const ContactSection = () => {

    const {toast} = useToast();

    const [isSubmitting, setIsSubmitting ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Message Sent!", 
                description: "Thank you for your message. I'll get back to you soon."
            });
            setIsSubmitting(false)
        }, 2000);
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl"> 
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a question or want to work together? Feel free to reach out!
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        Whether you have a question about my work, want to collaborate on a project, or just want to say hi, my inbox is always open. I look forward to hearing from you!       
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                 <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:onibudomotunrayo2901@gmail.com"
                                     className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                                        onibudomotunrayo2901@gmail.com
                                    </a>
                                </div>
                            </div>

                           <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+2348121135541"
                                     className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                                        +234 812 113 5541
                                            
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a 
                                     className='text-muted-foreground hover:text-primary transition-colors duration-300'>
                                        Yaba, Lagos, Nigeria
                                    </a>
                                </div>
                            </div>
                        </div >

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>

                                <a href="#" target="_blank">
                                    <Twitter/>
                                </a>

                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>

                                <a href="#" target="_blank">
                                    <Facebook />
                                </a>                                
                            </div>
                        </div>
                    </div>

                    <div
                     className="bg-card p-8 rounded-lg shadow-xs"
                     onSubmit={handleSubmit}
                    
                    
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Send Me a Message
                        </h3>

                        <form className='space-y-6' >
                            <div>
                                <label 
                                    htmlFor="name"
                                    className='block text-sm font-medium mb-2'>
                                        {" "}
                                        Name
                                </label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='Your Name' 
                                />
                            </div>


                             <div>
                                <label 
                                    htmlFor="email"
                                    className='block text-sm font-medium mb-2'>
                                        {" "}
                                        Email
                                </label>
                                <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                placeholder='youremail@gmail.com' 
                                />
                            </div>

                             <div>
                                <label 
                                    htmlFor="name"
                                    className='block text-sm font-medium mb-2'>
                                        {" "}
                                       Message
                                </label>
                                <input 
                                type="text" 
                                id="message" 
                                name="message" 
                                required
                                className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                placeholder='Hi, I would like to discuss a potential project with you...' 
                                />
                            </div>

                                <button 
                                type="submit"
                                disabled={isSubmitting}
                                 className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    
                                )}>
                                    {isSubmitting ? "sending..." : "Send Message"}
                                </button>


                        </form>

                    </div>

                </div>
            </div>
        </section>
    )
}