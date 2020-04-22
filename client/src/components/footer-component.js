import React , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends Component
{
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     };
    // }
    render()
    {
        return(
            <footer class="container-fliud">
                <div styles="text-align:center;"><i class="fa fa-facebook social"></i><i class="fa fa-twitter social"></i><i class="fa fa-instagram social"></i><i class="fa fa-envelope social"></i></div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <ul>
                                <li>Some Stupid Things.</li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                            <ul>
                                <li>Some Stupid Things.</li>
                            </ul>
                        </div>
                        <div class="div col-lg-6 col-md-4 col-sm-12 col-xs-12" styles="text-align:right;">Project <br/>by Nirmal Khedkar (181IT230),<br/>Mukesh Kumar (181IT228) and<br/>Yash Parakh (181IT253)</div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;