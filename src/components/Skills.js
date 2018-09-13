import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Skills extends Component{
  render(){
   
    return(
      <div id='skills' className='Skills'>
        <div className='skl'>
          <div className='row'>
            <div className='pic-con col-lg-2'>
              <img className='pic' height='250px' width='100%' src="https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt=""/>
              <p>C</p>
            </div>
            <div className='pic-con col-lg-4'>
              <img className='pic' height='250px' width='100%' src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
              <p>C++</p>
            </div>
            <div className='pic-con col-lg-5'>
              <img className='pic' height='250px' width='100%' src="https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
              <p>JavaScript</p>
            </div>

          </div>
          
          <div className='row'>
            <div className='pic-con col-lg-4'>
              <img className='pic' height='250px' width='100%' src="https://images.pexels.com/photos/270488/pexels-photo-270488.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
              <p>Html</p>
            </div>
            <div className='pic-con col-lg-3'>
              <img className='pic' height='250px' width='100%' src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
              <p>CSS</p>
            </div>
            <div className='pic-con col-lg-4'> 
              <img className='pic' height='250px' width='100%' src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
              <p>ReactJs</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Skills;