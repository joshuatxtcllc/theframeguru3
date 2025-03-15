import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      image: '/api/placeholder/400/300',
      name: 'Sarah J.',
      text: 'The custom framing perfectly complemented my abstract painting. The metallic frame adds just the right amount of modern flair!',
      frameType: 'Metal Silver'
    },
    {
      id: 2,
      image: '/api/placeholder/400/300',
      name: 'Michael T.',
      text: 'Our family photos look incredible in the gallery wall arrangement. The Frame Guru made it so easy to create a cohesive look.',
      frameType: 'Wood Natural'
    },
    {
      id: 3,
      image: '/api/placeholder/400/300',
      name: 'Elena R.',
      text: 'The minimalist frame style enhanced my photography without distracting from it. Exactly what I was looking for!',
      frameType: 'Composite White'
    },
    {
      id: 4,
      image: '/api/placeholder/400/300',
      name: 'David L.',
      text: 'The rich walnut frame transformed my vintage map print into a statement piece. Exceptional craftsmanship!',
      frameType: 'Wood Walnut'
    },
    {
      id: 5,
      image: '/api/placeholder/400/300',
      name: 'Nina P.',
      text: 'My digital art looks spectacular with the black frame and white mat. The contrast really makes the colors pop!',
      frameType: 'Wood Black'
    },
    {
      id: 6,
      image: '/api/placeholder/400/300',
      name: 'James K.',
      text: 'Our wedding photos look timeless in these elegant gold frames. The quality exceeded our expectations!',
      frameType: 'Metal Gold'
    }
  ];

  return (
    <div className="inspiration-container">
      <p className="inspiration-intro">
        See how our customers have transformed their spaces with custom framing solutions
      </p>
      
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-image-container">
              <img 
                src={testimonial.image} 
                alt={`Framed artwork by ${testimonial.name}`}
                className="testimonial-image" 
              />
              <div className="frame-type-tag">{testimonial.frameType}</div>
            </div>
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">— {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="inspiration-cta">
        <h3>Ready to transform your artwork?</h3>
        <button className="btn btn-secondary">Start Your Project</button>
      </div>
    </div>
  );
};

export default Inspiration;
