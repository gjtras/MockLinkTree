import React, {useState} from 'react';
import './add.css'
import {useDispatch, useSelector} from 'react-redux';
import {addLink, changeName, removeLink, customizeBackground} from './../../redux/action/index'
// import { Links } from '../links/links';


export const Add = () => {

    const[name, setname] = useState(""); //For changing the name
    const[link, setLink] = useState({
        url: "",
        desc: ""
    });                

    const[url, seturl] = useState("");

    const dispatch = useDispatch();

    
 
    
    /* Everything below this line will have to do with the minor customization of the linktree */
    const onClickChangeBackGround = (background = "") =>{
        // console.log(background);
        dispatch(customizeBackground(background));
    };

    const backgroundtheme = useSelector((state) => state.background);
    /* Everything Above this line will have to do with the minor customization of the linktree */






    /* Everythin below this line will have to do with deleting links from the linktree */
    const onClickRemoveUrl = () => {
        dispatch(removeLink(url));
        seturl("");
    };
    /* Everythin Above this line will have to do with deleting links from the linktree */
    

    /* Everything below this line will have to do with adding links to the linktree */
    const changeDataLink = (e) =>{
        const {name, value} = e.target;
        setLink({
            ...link,
            [name]: value
        });
    };

    const onClickAddLink = (event) =>{
        event.preventDefault();
        console.log(link);
        dispatch(addLink(link));
        setLink({
            url: "",
            desc: ""
        })
        
    }
    /* Everything above this line will have to do with adding links to the linktree */

    /* Everything below this line has to do with changing the Name of the linktree */
    const changeDataName = (e) =>{
        setname(e.target.value)
    };

    const onClickChangeName =() =>{
        dispatch(changeName(name));
        setname("");
    };
    /* Everything above this line has to do with changing the name of the linktree */


  return (

    <div className={'add  d-flex flex-column align-items-center justify-content-center ' + backgroundtheme}  >
        <h1 className='mb-4 mt-n4 '>LinkTree Options</h1>
        {/* Everything below this line has to do with changing the Name of the linktree */}
        <div className='changeName d-flex flex-column align-items-center justify-content-center border rounded w-25'>
            <h6 className='text-center'>Modify Name here</h6>
            <input type="text" value={name} onChange={ (e) => changeDataName(e) }  />
            <span class="input-group-btn">
            <button class="btn btn-default" type="button" onClick={() => onClickChangeName()}>Enter</button>
            </span>
        </div>
        {/* Everything above this line has to do with changing the name of the linktree */}

        {/* Everything below this line will have to do with adding links to the linktree */}
        <div className='Link_Adder  d-flex flex-column align-items-center justify-content-center mt-4 border rounded w-25 h-200 '>
            <form className='d-flex flex-column align-items-center justify-content-center' onSubmit={onClickAddLink}>
                <h6>Add Link</h6>
                <h7 >Paste the URL here:</h7>
                <input type="url" name="url" required value={link.url} onChange={(e) => changeDataLink(e)} />
                <h7>Write a brief description here: </h7>
                <input type="text" name="desc" value={link.desc} required onChange={(e) => changeDataLink(e)} />
                <button className="btn btn-default" type='submit'>Submit</button>
            </form> 
        </div>
        {/* Everything above this line will have to do with adding links to the linktree */}

        {/* Everything below this line will have to do with deleting links from the link tree */}
        <div className='Remove  d-flex flex-column align-items-center justify-content-center mt-4 border rounded w-25 h-200'>
            <h6>Remove a Link</h6>
            <h7>Paste the URL of the link you wish to remove</h7>
            <form onSubmit={onClickRemoveUrl} className="d-flex flex-column align-items-center justify-content-center">
                <input 
                    type="url"
                    required
                    value={url}
                    onChange={event => seturl(event.target.value)}
                />
                <button class="btn btn-default" type="submit" >Submit</button>
            </form>    
        </div>
        {/* Everything above this line will have to with deleting links from the linktree */}

        {/* Everything below this line will have to do with the minor customization of the linktree */}
        <div className='customization border rounded w-25 h-10 mt-4  d-flex flex-column align-items-center justify-content-center'>
            <h7>Select a new color mode </h7>
            <div className='d-flex flex-row'>
                <button type="button" onClick={event => onClickChangeBackGround(event.target.className)} className='DarkMode'></button>
                <button type="button" onClick={event => onClickChangeBackGround(event.target.className)} className='PurpleLove'></button>
                <button type="button" onClick={event => onClickChangeBackGround(event.target.className)} className='Ocean'></button>
                <button type="button" onClick={event => onClickChangeBackGround(event.target.className)} className='Dusk'></button>
                {/* <button type="button" onClick={event => onClickChangeBackGround(event.target.className)} className='Royal'></button> */}
                <button type="button" onClick={event => onClickChangeBackGround(event.target.className)} className='Default'></button>
            </div>
        </div>
        {/* Everything Above this line will have to do with the minor customization of the linktree */}
    </div>
  )
}
