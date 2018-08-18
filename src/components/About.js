import React ,{Component} from 'react';
import Typing from 'react-typing-animation';
class About extends Component{
    render(){
        return(
            <div className='About'>
               <div className='abt'>
               <div className='content'>
                    <Typing><h1>About</h1></Typing>
                    <div className='text'>
                        Hey! This is Palak Manocha from Jalandhar (Punjab) currently persuing Batchelor's of Engineering in Computer Sciences at Universsity Institute Of Engineering and Technology, Panjab University, Chandigarh.
                        My interests lie in  Web Designing, love spending time with Divs and Components. Also keen to work with Machine Learning and Artifcial Intelligence.
                        <br/>
                        <br/>
                        My hobbies are Singing and Doodling. I am fascinated by idea of poems with less words and more emotions.
                        I believe in being lazy and working smart rather than working hard. 
                    </div>
               </div>
            
                <div className='img-con'>
                    <div className='transparent1'>
                        <div className='white'></div>
                    </div>
                    <div className='img'>
                    </div>
                    <div className='transparent2'>
                        <div className='white'></div>                        
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default About;