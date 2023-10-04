import { FaStar } from 'react-icons/fa';

type TestimonialProps = {
  name: string;
  role: string;
  text: string;
  imageUrl: string;
};

const data = [
  {
    name: 'Sarah Thompson',
    role: 'Professional Gamer',
    imageUrl: 'https://randomuser.me/api/portraits/women/50.jpg',
    text: "I've been gaming for years, and the products from your store have truly elevated my gaming experience. The controller I bought is incredibly responsive, and the headset delivers crystal-clear audio. Thanks for helping me dominate the leaderboards!",
  },
  {
    name: 'Michael Rodriguez',
    role: 'Streamer & Content Creator',
    imageUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
    text: 'As a content creator, I demand top-notch gear, and your gaming products never disappoint. The keyboard is a dream to type on, and the mouse is precise for my FPS games. My viewers are loving the improved audio quality from the headset too!',
  },
  {
    name: 'David Harris',
    role: 'Esports Enthusiast',
    imageUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
    text: 'I may not be a pro, but your products have made me feel like one! The headset is comfortable for long gaming sessions, and the controller feels so smooth. Plus, the discounts make it easy to stay within my budget. Thanks for the awesome gear!',
  },
];

const Testimonial = ({ name, role, text, imageUrl }: TestimonialProps) => {
  return (
    <div className="bg-black text-white rounded-3 d-flex flex-column align-items-center gap-2 py-5 px-3 text-center">
      <p className="fs-6 mb-3">{text}</p>
      <img
        src={imageUrl}
        alt={name}
        width={80}
        height={80}
        className="rounded-circle mt-auto"
      />
      <div className="">
        <h5>{name}</h5>
        <p className="opacity-75 fs-6">{role}</p>
        <div className="d-flex gap-1 justify-content-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-warning fs-3" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="px-1 py-5 max-width-container">
      <div
        className="mb-5 fs-5 fs-sm-4"
        style={{
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <h2
          style={{
            fontSize: '2.5em',
            fontWeight: 700,
            marginBottom: '1rem',
            lineHeight: 0.9,
          }}
        >
          5,000+ of our users love our products
        </h2>
        <p className="fs-5">
          Don't just take our word for it. Read what our users have to say about
          their experience with our products. Join the satisfied customers who
          have improved their gaming setup with us.
        </p>
      </div>

      <div className="d-flex flex-column flex-md-row gap-3 align-items-stretch">
        {data.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
