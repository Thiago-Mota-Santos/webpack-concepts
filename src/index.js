import _ from 'lodash';
import './styles.css'
import Icon from './icon.jpg'

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const IconImage = new Image();
    IconImage.src = Icon;

    element.appendChild(IconImage);

    return element;
  }
  
  document.body.appendChild(component());