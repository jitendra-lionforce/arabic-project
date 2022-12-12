import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import generalLogo from './assets/images/general-logo.png'
const Header = () => {
    const navigate = useNavigate()

    const logout = () => {
        // setAuth(true)
        localStorage.removeItem('login')
        let login = localStorage.getItem('login')
        // if(login) login = JSON.parse(login)
        console.log(login);
        navigate('/login')

        if (login) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            className='header-a'
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );


    return (
        <div>
            <div className="header d-flex justify-content-between">
                <img className='header-main-img' src={generalLogo} alt="" />
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        Inspection Supervisor
                        <div className="white-circle">
                        </div>

                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item eventKey="1">
                            <button onClick={logout} className='btn'>Logout </button>

                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div></div>

        </div>
    )
}

export default Header