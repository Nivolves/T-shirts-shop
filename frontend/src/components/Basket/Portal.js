import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Portal = ( { children } ) => {
  const modal = document.createElement( 'div' );
  modal.setAttribute( 'class', 'modal-container' );

  useEffect( () => {
    document.body.appendChild( modal );
  } );

  useEffect( () => {
    return () => {
      document.body.removeChild( modal );
    };
  }, [ modal ] );

  return ReactDOM.createPortal( children, modal );
};

export default Portal;
