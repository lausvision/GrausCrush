import React, {Component} from 'react';
import hall from './img/a.jpg';


class HomeScreen extends Component{

    render(){
        return(
           
            <div class = "Hall">
                
               <img class = "imageHall" src={hall} alt="castle university"></img>
               <div class="intro">¿Quieres acceder a un grado universitario?</div>
               <div class="intro2">Visualiza todos los grados universitarios de Catalunya.<br/> Guarda tus grados favoritos.</div>
            </div>

                
            
        )
    }
}

export default HomeScreen;