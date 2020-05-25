import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../shared/stylesheets/crop-style.css"
class Products extends Component
{
    constructor(props){
        super(props);
        this.state = {
          cropImages : {
            rice : '/assets/images/rice.jpg',
            wheat : '/assets/images/wheat.jpg',
            chickpea: '/assets/images/chickpea.jpg',
            urad: '/assets/images/urad.jpg',
          }
        };
        
    }
    render()
    {
        const Products = () => {
            return (
                <div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card crop" ><img className="card-img-top" src={this.state.cropImages.rice}/>
                                <div className="card-body">
                                    <h5 className="card-title">Rice</h5>
                                    <p className="card-text"><i>Oryza sativa</i><br/></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Enjoy from across the country </li>
                                    <li className="list-group-item">Cereals</li>
                                    <li className="list-group-item">5-8 Rs/kg</li>
                                    <li className="list-group-item"><a className="btn btn-primary" href="http://localhost:3000">Vendors</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card crop"  ><img className="card-img-top" src={this.state.cropImages.wheat}/>
                                <div className="card-body">
                                    <h5 className="card-title">Wheat</h5>
                                    <p className="card-text"><i>Triticum aestivum</i><br/></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Enjoy from across the country </li>
                                    <li className="list-group-item">Cereals</li>
                                    <li className="list-group-item">3-5 Rs/kg</li>
                                    <li className="list-group-item"><a className="btn btn-primary" href="http://localhost:3000">Vendors</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card crop"  ><img className="card-img-top" src={this.state.cropImages.chickpea}/>
                                <div className="card-body">
                                    <h5 className="card-title">Chickpea</h5>
                                    <p className="card-text"><i>Cicer arietinum</i><br/></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Enjoy from acroos the country </li>
                                    <li className="list-group-item">Lentils</li>
                                    <li className="list-group-item">10-15 Rs/kg</li>
                                    <li className="list-group-item"><a className="btn btn-primary" href="http://localhost:3000">Vendors</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div className="card crop"  ><img className="card-img-top" src={this.state.cropImages.urad}/>
                                <div className="card-body">
                                    <h5 className="card-title">Urad</h5>
                                    <p className="card-text"><i>Vigna mungo</i><br/></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Enjoy from acroos the country </li>
                                    <li className="list-group-item">Cereals</li>
                                    <li className="list-group-item">13-16 Rs/kg</li>
                                    <li className="list-group-item"><a className="btn btn-primary" href="http://localhost:3000">Vendors</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <div>
                {Products()}
            </div>
        );
    }
}
export default Products;