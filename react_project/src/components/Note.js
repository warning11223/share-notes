import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useRouteMatch} from "react-router-dom";
import env from '../env.json'



const Note = () => {
    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    console.log(noteURL)

    useEffect(() => {
        if(noteURL != undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({"url" : noteURL})
            })
                .then(res => res.json())
                .then(res => {
                    if(res.result) {
                        setNoteText(res.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    } else if (!res.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }

                })
                .catch(err => console.log('note error - ', err))
        } else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, [])

    const getNote = (e) => {
        e.preventDefault();

        let url = e.target.elements.url.value;
        url.trim();

        if(url === '') {
            alert('Заполните поля');
            return false;
        }

        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="text">

            <div className={lineClass} style={{maxWidth: '31%', margin: '0 auto'}}>
                <h4>Note value: {noteText} </h4>
                <button  style={{marginTop: 10}} className='btn btn-info' onClick={() => window.location.href = env.url}>Смотреть еще один note</button>
            </div>

            <div className={formClass}>
                <form action="" onSubmit={getNote} >
                    <div className="input-group flex-nowrap input-div">
                        <span className="input-group-text" id="addon-wrapping">Заметка:</span>
                        <input type="text" name='url' id='url' className='formControl form-control note-input' placeholder="Введите hash заметки..."  />
                        <button type='submit' className='btn btn-info'>Искать note</button>
                    </div>
                </form>
            </div>

            <div className={errorClass}>
                <p>Произошла ошибка. Такой note не найден</p>
            </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Note;
