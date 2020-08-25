import React, {Component} from 'react';
import hall from './img/a.jpg';


class HomeScreen extends Component{


   

    render(){
        return(
           
            <div class = "Hall">
                
               <img class = "imageHall" src={hall} alt="castle university"></img>
               <div class="intro">Museum of the Netherlands, in Amsterdam. <br/>Dutch art and history from the Middle Ages<br/> to the present day.</div>
               <div class="intro2">React App made with the API of the museum.</div>
            </div>

                
            
        )
    }
}

export default HomeScreen;