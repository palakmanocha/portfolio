import React ,{Component} from 'react';
class Nav extends Component{
    render(){
        return(
            <div className='Nav'>
                <div className='social'>
                    <a href="">
                        <i className='icon icono-facebook'></i>
                    </a>
                    <a href="">
                        <i className='icon icono-instagram'></i>
                    </a>
                    <a href="">
                        <i className='icon icono-linkedIn'></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;