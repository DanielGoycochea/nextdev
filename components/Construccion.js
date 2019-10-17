import React from 'react';

const Construccion = () => {
    return (
    <div className="container">
        <div>
            <h1><span>danielgoycochea.dev</span> En Construcción</h1>
            <p>Escríbeme a <span>contacto@danielgoycochea.dev</span></p>
        </div>
        <style jsx>{`
      
      .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 639px;

      }
      h1{
        font-size: 52px;
        
      }
      p{
          font-size: 20px;
      }
        span:nth-child(2n+1){
          color: #0588A6;
      }
       


    `}</style>
    </div>
    );
};

export default Construccion;