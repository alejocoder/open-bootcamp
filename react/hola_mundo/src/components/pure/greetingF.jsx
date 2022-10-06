import React, {useState} from 'react'
import PropTypes from 'prop-types';

const Greetingf = (props) => {

    const [age, setage] = useState(29);

    const birthday =() =>{
        setage(age+1)
    }

  return (
    <div>
        <h1>
            Hola {props.name} Componente funcional
        </h1>
        <h2>
            tu edad es {age}
        </h2>
        <div>
            <button onClick={birthday}>
                cumplir años
            </button>
        </div>
    </div>
  );
};

Greetingf.propTypes = {
    name: PropTypes.string,
};

export default Greetingf