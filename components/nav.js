import React from 'react';

const Nav = () => {
    return (
        <header className="container__nav">
            <a href="#" className="nombre__nav">
                <span>Daniel Goycochea</span>
            </a>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Trabajos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <style jsx>{`
                .container__nav{
                    background: #333;
                    color: #ffffff;
                    height: 80px;
                }
                
                .nombre__nav{
                    color: white;
                    text-decoration: none;
                }
                nav{
                    float: right;
                }
                nav ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    padding-right: 20px;
                }

                nav ul li{
                    display: inline-block;
                    line-height: 80px;
                }
                nav ul li a {
                    display: block;
                    padding: 0 10px;
                    text-decoration: none;
                    color: white;
                }
                nav ul li a:hover {
					background: #0b76a6;
				}

                
                `}

            </style>
        </header>
    );
};

export default Nav;