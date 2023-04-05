import React from "react";
import '../assets/educationinfo.css';
import '../assets/edu.js';

class Eduinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ selectedValue: event.target.value });
    }


    render() {
        return (
            <>
                <div>
                    <div>
                        <div className="heading">The Graduation Directory</div>
                    </div>

                    <h2> Education</h2>
                    <form action="#" method="post">
                        <h2>Secondary Education Information</h2>
                        <div className="the_whole">
                            <div className="container">
                                <form>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span>Matric</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio" />
                                        <span>O levels</span>
                                    </label>
                                </form>
                            </div>

                            <div className="the_firstline">
                                <div className="one_line">
                                    <div className="basic_info">
                                        <div className="custom-select">
                                            <select
                                                value={this.state.selectedValue}
                                                onChange={this.handleChange}
                                            >
                                                <option value="0">Subject selected</option>
                                                <option value="1">Science</option>
                                                <option value="2">Arts</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="basic_info">
                                        <div className="custom-select" >
                                            <select>
                                                <option value="0">Graduating year</option>
                                                <option value="1">2019</option>
                                                <option value="2">2018</option>
                                                <option value="3">2017</option>
                                                <option value="4">2016</option>
                                                <option value="5">2015</option>
                                                <option value="6">2014</option>
                                                <option value="7">2013</option>
                                                <option value="8">2012</option>
                                                <option value="9">2011</option>
                                                <option value="10">2010</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name"> School name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                            </div>
                        </div>

                        <h2> Higher Secondary Education Information</h2>
                        <div class="the_whole">


                            <div class="container">
                                <form>
                                    <label>
                                        <input type="radio" name="radio" checked=""></input>
                                        <span>FSc</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"></input>
                                        <span>A levels</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"></input>
                                        <span>ICS</span>
                                    </label>

                                </form>
                            </div>

                            <div class="the_firstline">
                                <div class="one_line">
                                    <div class="basic_info">

                                        <div class="custom-select" >
                                            <select>
                                                <option value="0">Subject selected</option>
                                                <option value="1">Pre-engineering</option>
                                                <option value="3">Computer Science</option>
                                                <option value="2">Pre-medical</option>

                                            </select>


                                        </div>

                                    </div>

                                    <div class="basic_info">
                                        <div class="custom-select" >
                                            <select>
                                                <option value="0">Graduating year</option>
                                                <option value="1">2019</option>
                                                <option value="2">2018</option>
                                                <option value="3">2017</option>
                                                <option value="4">2016</option>
                                                <option value="5">2015</option>
                                                <option value="6">2014</option>
                                                <option value="7">2013</option>
                                                <option value="8">2012</option>
                                                <option value="9">2011</option>
                                                <option value="10">2010</option>


                                            </select>


                                        </div>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="Cname"> College name</label>
                                    <input type="text" id="Cname" name="Cname" required></input>
                                </div>






                            </div>


                        </div>




                        <h2> Bachelors</h2>
                        <div className="the_whole">


                            <div className="container">
                                <form>
                                    <label>
                                        <input type="radio" name="radio" ></input>
                                        <span>Bsc</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"></input>
                                        <span>BA</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"></input>
                                        <span>BBA</span>
                                    </label>

                                </form>
                            </div>

                            <div className="the_firstline">
                                <div className="one_line">
                                    <div className="basic_info">



                                    </div>





                                    <div className="basic_info">
                                        <div id="higheredu" className="custom-select" >
                                            <select>
                                                <option value="0">Program</option>
                                                <option value="1">Accounting and Finance</option>
                                                <option value="2">Data Science</option>
                                                <option value="3">Cyber Security</option>
                                                <option value="4">Artificial Intelligence</option>
                                                <option value="5">Computer Science</option>



                                            </select>


                                        </div>

                                    </div>
                                    <div className="basic_info">
                                        <div className="custom-select" >
                                            <select>
                                                <option value="0">Graduating year</option>
                                                <option value="1">2022</option>
                                                <option value="1">2023</option>
                                                <option value="1">2021</option>
                                                <option value="1">2020</option>
                                                <option value="1">2019</option>
                                                <option value="2">2018</option>
                                                <option value="3">2017</option>
                                                <option value="4">2016</option>
                                                <option value="5">2015</option>
                                                <option value="6">2014</option>
                                                <option value="7">2013</option>
                                                <option value="8">2012</option>
                                                <option value="9">2011</option>
                                                <option value="10">2010</option>


                                            </select>


                                        </div>

                                    </div>



                                </div>
                                <div className="form-group">
                                    <label for="Cname"> University name</label>
                                    <input type="text" id="Cname" name="Cname" required></input>
                                </div>
                                <div className="form-group">
                                    <label for="Cname"> Major</label>
                                    <input type="text" id="Cname" name="Cname" required></input>
                                </div>






                            </div>


                        </div>
                        <h2>Masters</h2>
                        <div class="the_whole">


                            <div class="container">
                                <form>
                                    <label>
                                        <input type="radio" name="radio" checked=""></input>
                                        <span>MA</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"></input>
                                        <span>Msc</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="radio"></input>
                                        <span>MBA</span>
                                    </label>

                                </form>
                            </div>

                            <div class="the_firstline">
                                <div class="one_line">


                                    <div class="basic_info">
                                        <div class="custom-select">
                                            <select>
                                                <option value="0">Graduating year</option>
                                                <option value="1">2019</option>
                                                <option value="2">2018</option>
                                                <option value="3">2017</option>
                                                <option value="4">2016</option>
                                                <option value="5">2015</option>
                                                <option value="6">2014</option>
                                                <option value="7">2013</option>
                                                <option value="8">2012</option>
                                                <option value="9">2011</option>
                                                <option value="10">2010</option>


                                            </select>


                                        </div>

                                    </div>

                                    <div class="basic_info">

                                        <div class="custom-select" >
                                            <select>
                                                <option value="0">Program</option>
                                                <option value="1">Accounting and Finance</option>
                                                <option value="2">Data Science</option>
                                                <option value="3">Cyber Security</option>
                                                <option value="4">Artificial Intelligence</option>
                                                <option value="5">Computer Science</option>

                                            </select>


                                        </div>

                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="Cname"> University name</label>
                                    <input type="text" id="Cname" name="Cname" required></input>
                                </div>
                                <div class="form-group">
                                    <label for="Cname"> Major</label>
                                    <input type="text" id="Cname" name="Cname" required></input>
                                </div>






                            </div>


                        </div>

                    </form>
                </div >
                <div className="the_buttons">
                    <input type="submit" value="Save"></input>
                    <input type="submit" value="Next"></input>







                </div>







            </>




        );
    }
}
export default Eduinfo;