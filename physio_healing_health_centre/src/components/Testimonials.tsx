import React, { useEffect, useState } from 'react';
import './Testimonials.css';

type Testimonial = {
  name: string;
  review: string;
  link: string;
};

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  // Simulate fetching from a database
  return [
    {
      name: 'Elizabeth',
      review:
        'I absolutely look forward to coming, despite the reason of pain. This is a great place. They actually care. Everything is always clean. The attention is so top notch that even when it’s busy you feel like you’re the only one there',
      link: 'https://www.google.com',
    },
    {
      name: 'Zenaida',
      review:
        'After my car accident my partner and I have been receiving our care in their hands; honestly from front desk to PT has been amazing, they even gave me a hand with my two year old when I had no one else',
      link: 'https://www.google.com',
    },
    // You can add more dummy entries or connect to your DB/API
  ];
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (testimonials.length === 0) return <p>Loading...</p>;

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">What Our Patients Say</h2>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className={`testimonial-card ${i === index ? 'active' : ''}`}
          >
            <p className="quote-mark">“</p>
            <p className="testimonial-text">{testimonial.review}</p>
            <p className="testimonial-author">{testimonial.name}</p>
            <a
              href={testimonial.link}
              target="_blank"
              rel="noreferrer"
              className="testimonial-link"
            >
              Google 5 Stars Review
            </a>
          </div>
        ))}

        <div className="arrow-controls">
          <button className="arrow" onClick={handlePrev}>
            &#8592;
          </button>
          <button className="arrow" onClick={handleNext}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
