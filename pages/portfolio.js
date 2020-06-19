import Menu from '../components/Menu';
import Layout from '../components/Layout'
import Gallery from '../components/Gallery';

const Portfolio = () => {
    //
    const images = []
    const imageCount = 1
    let count = 1;
    while (count <= imageCount){
        images.push(`/static/portfolio/${count}.jpg`)
        count++
    }
    return(
        <div className="container">
            <Layout>
                <h1>This is the Portfolio page</h1>
                <Gallery images={images}></Gallery>
                <a href="https://belensminesweeper.herokuapp.com/">Visit app on Heroku</a>
            </Layout>
        </div>
    )

}

export default Portfolio;
