import Menu from '../components/Menu';
import Layout from '../components/Layout';


const Contact = () => {
    return(
    <div className="container">
        <Layout>
            <h1>This is the Contact us page</h1>
            <div className="contact-text">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut est euismod, iaculis ante efficitur, sodales
                nisl. Nulla non orci vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis, aliquet neque. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <style jsx>{`

      .contact-text {
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
        .contact-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
        </Layout>
    </div>
    )

}

export default Contact;
