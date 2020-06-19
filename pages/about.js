import Layout from '../components/Layout';

const About = () => (
  <Layout>

    <h1>About Me</h1>
    <ul className="company-info">
      <li>
        <span className="company">Belén Mata</span>
      </li>
      <li>Cape Town</li>
      <li>South Africa</li>
      <li>
        <a href="mailto:belengrrez@gmail.com">email</a>
      </li>
    </ul>
    <div className="about-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut est euismod, iaculis ante efficitur, sodales
        nisl. Nulla non orci vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis, aliquet neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <style jsx>{`
      .company-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
        background: linear-gradient(to left, #000,#fff);
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 20px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default About;
