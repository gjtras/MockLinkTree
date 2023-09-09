import React from 'react';
import {useSelector} from 'react-redux';
import './links.css';




export const Links = () => {
  const name = useSelector((state) => state.name);
  const links = useSelector((state) => state.links);
  const backgroundtheme = "links" + useSelector((state) => state.background);

  
  console.log(backgroundtheme);

  
  return (
    <div className={'links pt-3 ' + backgroundtheme}>
        <h1 className='text-center'> {name === "" ? 'Your Name' : name }'s Linktree  </h1>
            <div className='row d-flex flex-column align-items-center justify-content-start'>
                
            {links.length === 0 ? (
            <div className='border text-center rounded-pill w-25  mt-2 pt-1'>
              <h6>Your Link here</h6>
            </div>
            ) : (
            links.map(items => (
              <a href={items.url} className='border text-center link-dark rounded-pill w-25  mt-2 pt-1 text-decoration-none'  target="_blank" key={items.url}>
                {/* <div className='border text-center rounded-pill w-25 h-25 mt-2 pt-1'> */}
                  <h6>{items.description}</h6>
                {/* </div> */}
              </a>
            ))
          )}
          </div>
             
    </div>
  )
}
