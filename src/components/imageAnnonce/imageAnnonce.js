import React, {PropTypes, Component} from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './imageAnnonce.scss'
import { Grid, Row, Col } from 'react-bootstrap'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap'

export default class imageAnnonce extends Component {

    static propTypes = {
        images: PropTypes.array,
        price: PropTypes.string,
    };

    static defaultProps = {
        images: null,
        price: null,
    };

    state = {
        images: this.props.images,
        price: this.props.price,
    };

    componentDidMount() {
      console.log(this.props.images);
    };


    render() {

      const {
            images,
            price,
        } = this.props

      return (
       <Row className="show-grid row-no-gutter">
          <div className={classes.CarouselInfo}>
             <Col xs={12} md={12} lg={12}>
                <Carousel>
                   {images.map((image, index) => {
                      return <Carousel.Item>
                      <img className={classes.imageAnnonce} src={image.uri} />
                      </Carousel.Item>
                   })}
                </Carousel>
                <div className={classes.imageAnnonceInfo}>
                   <div className={classes.infobg}></div>
                   <span className={classes.info}>{price} €</span>
                </div>
             </Col>
          </div>
       </Row>
     )
 }
}
