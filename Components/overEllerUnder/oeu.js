import react, {useState} from "react";
import styles from '../../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import OeUBoard from "./board";
import { Button } from "reactstrap";



const OeUComponent = (props) =>{

  
      return (
        <div>
          <OeUBoard/>
        </div>
  )
}

export default OeUComponent;