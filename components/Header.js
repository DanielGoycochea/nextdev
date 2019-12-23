import React from 'react';

const Header = () => {
    return (
        <div className="container__header">
            <div className="imagen__header">
            <div className="text__header">
                <h2>Web Developer</h2>
                <h1>Daniel Goycochea</h1>
                

            </div>
                
            </div>
        <style jsx>{`
            .container__header{
                display: block;
            }
           .imagen__header{
               background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://res.cloudinary.com/dzxpqumj0/image/upload/v1565324686/business-2717063_1920.jpg");
               background-size: cover;
               height: 700px;
               width: 100%;
               background-position: center;
               background-repeat: no-repeat;
               background-size: cover;
               position: relative;
           }
           .text__header{
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 50px;
            font-style: italic;
            margin-bottom: 0.35em;
            padding: 0 20px;
           }
           .text__header h1{
            font-size: 70px;
            line-height: 82px;
            font-weight: 800;
            
            margin-bottom: 0.35em;
            padding: 0 20px;
           }

           .text__header h2{
                display: block;
                font-size: 1.17em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-weight: bold;
                font-family: 'Shadows Into Light', cursive;
                margin-top: 0px;
           }

            
        `}</style>
        </div>
    );
};

export default Header;