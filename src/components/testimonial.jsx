import React, { useState, useEffect } from "react";

const Testi = () => {
  const customers = [
    {
        name: "Andrew Devis",
        image:
          "https://ecomexpertsllc.s3.amazonaws.com/user5.png",
        location: "Founder - Carz Pro",
        testimonial:
          "Got my LLC and store setup and running quickly. Highly Recommended!.",
      },
    {
      name: "Barbara Jackson",
      image:
        "https://ecomexpertsllc.s3.amazonaws.com/user1.jpg",
      location: "Manager - S&N Stores",
      testimonial:
        "Their product selection for my store was spot-on. Seeing great returns!.",
    },
    {
        name: "Sofia Perez",
        image:
          "https://ecomexpertsllc.s3.amazonaws.com/user6.png",
        location: "CEO - FashOn Shop",
        testimonial:
          "Efficient, Professional, and Profitable. That's how I'd describe their service.",
      },
      {
        name: "Mark Anderson",
        image:
          "https://ecomexpertsllc.s3.amazonaws.com/user2.jpg",
        location: "Director - Crabit Commerce",
        testimonial:
          "Exceptional service! My amazon account setup was hassle free.",
      },
    // More customer testimonials...
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === customers.length - 1 ? 0 : prevCount + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [customers.length]);

  const currentCustomer = customers[count];

  return (
    <section style={styles.container}>
      <div style={{ ...styles.circle, ...styles.first }}></div>
      <div style={{ ...styles.circle, ...styles.second }}></div>
      <div style={styles.bar}></div>
      <img
        alt="profile"
        height="90"
        width="90"
        className="profile"
        src={currentCustomer.image}
        style={styles.profile}
      />
      <div style={styles.text}>{currentCustomer.testimonial}</div>
      <div style={styles.details}>
        <p style={styles.name}>{currentCustomer.name}</p>
        <p style={styles.city}>{currentCustomer.location}</p>
      </div>
    </section>
  );
};

const styles = {
  container: {
    border: "2px solid #f2bd58",
    backgroundColor: "#000",
    borderRadius: "20px",
    padding: "15px",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexWrap: "wrap",
    width: "90%",
    maxWidth: "600px",
    height: "auto",
    margin: "20px auto",
  },
  bar: {
    content: "''",
    height: "5px",
    width: "88%",
    position: "absolute",
    background: "#f2bd58",
    bottom: "0",
    borderRadius: "20px",
    left: "10px",
    animation: "width 5s linear infinite both",
  },
  first: {
    top: "-40px",
    left: "15px",
  },
  second: {
    bottom: "-35px",
    right: "15px",
    transform: "rotate(180deg)",
  },
  text: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "calc(10px + 1vw)",
  },
  details: {
    textAlign: "center",
  },
  name: {
    fontWeight: "900",
    fontSize: "calc(10px + 1vmin)",
  },
  city: {
    fontSize: "calc(10px + 1vmin)",
  },
  profile: {
    border: "5px double #f2bd58",
    borderRadius: "50%",
    position: "absolute",
    top: "-50px",
    animation: "translate 0.75s 1 ease-in forwards",
  },
};

export default Testi;
