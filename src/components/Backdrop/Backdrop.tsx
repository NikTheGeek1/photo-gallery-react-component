import { ReactNode } from 'react';
import './Backdrop.css';

const Backdrop = ({children, closeModalHandler}: {
    children: ReactNode,
    closeModalHandler: (showMaximisedFlag: false | number) => void
}) => {

    return (
        <div className="backdrop-container" onClick={closeModalHandler.bind(this, false)}>
            {children}
        </div>
    );
};

export default Backdrop;