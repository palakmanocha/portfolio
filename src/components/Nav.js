import React ,{Component} from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
class Nav extends Component{
    render(){
        return(
            <div id='navbar' className='Nav'>
                <div className='social'>
                    <a href="https://www.facebook.com/palakmanocha87">
                        <i className='icon icono-facebook'></i>
                    </a>
                    <a href="https://www.instagram.com/palakmanocha27/">
                        <i className='icon icono-instagram'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/palak-manocha-176b51151/">
                        <i className='icon icono-linkedIn'></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Nav;