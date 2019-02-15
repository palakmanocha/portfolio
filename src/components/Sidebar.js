import React ,{Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MaterialIcon, {colorPalette} from 'material-icons-react';
class Sidebar extends Component{
    

    render(){
        return(
            <div id='sd' className='Sidebar'>
                <div className='main'>
                    <ul type='none'>
                        <li >
                            <AnchorLink offset='0' href='#home'>
                                <MaterialIcon id='icon' icon="home" size='40' color='white'/>
                                 <span className='li'>Home</span>    
                            </AnchorLink>
                        </li>
                        <li >
                            <AnchorLink offset='0'  href='#skills'>
                                <MaterialIcon  icon="local_library" size='40' color='white'/>
                                <span className='li' >Skills</span>     
                            </AnchorLink>                      
                        </li>
                        <li >
                            <AnchorLink offset='0' href='#projects'>
                                <MaterialIcon icon="trending_up" size='40' color='white'/> 
                                <span className='li'>Projects</span>           
                            </AnchorLink>
                        </li>
                        <li >   
                            <AnchorLink offset='0' href='#about'>
                                <MaterialIcon icon="info" size='40' color='white'/>
                                <span className='li'>About</span>     
                            </AnchorLink>
                        </li>
                        <li >
                            <AnchorLink offset='0' href='#contact'>
                                <MaterialIcon icon="contact_support" size='40' color='white'/>
                                <span className='li'>Contact</span>
                            </AnchorLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;