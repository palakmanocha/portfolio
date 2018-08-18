import React ,{Component} from 'react';
// import {Link} from 'react-router-dom'; 
class Sidebar extends Component{
    render(){
        return(
            <div className='Sidebar'>
                <div className='main'>
                    <ul type='none'>
                        <li>
                            <i className='icono-home'>Home</i>
                            <p>
                                Home
                            </p>
                        </li>
                        <li>
                            <i className='icono-document'></i>
                            <p>
                                Skills
                            </p>
                        </li>
                        <li>
                            <i className='icono-barChart'></i>
                            <p>
                                Projects
                            </p>
                        </li>
                        <li>
                            <i className='icono-heart'></i>
                            <p>
                                About
                            </p>
                        </li>
                        <li>
                            <i className='icono-pin'></i>
                            <p>
                                Contact
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;