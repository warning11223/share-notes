import React, {useState} from 'react';
import env from '../env.json'
import {logDOM} from "@testing-library/react";

const Create = () => {
    let [url, setUrl] = useState('');
    console.log(url)
    const sendData = (obj) => {
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if(res.result) {
                    setUrl(env.url + '/' + res.url)

                }
            })
            .catch(err => console.log('error -',err))
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        console.log(note)
        sendData({"note" : note});

    }

    return (
        <div>
            {
                url ? null : <form onSubmit={loadDataFromForm}>
                    <div className="create-div">
                        <label className="form-label">Новая заметка:</label>
                        <textarea className="form-control"  name="note" id="note" placeholder='Напишите заметку...' rows="3"></textarea>
                        <button type='submit' className='btn btn-info textarea-btn'>Создать</button>
                    </div>
            </form>
            }

            {
                url ? <div >
                <div className='one-more-note alert alert-primary' style={{maxWidth: '31%', marginTop: 80}}>
                    {url}
                </div>
                    <button className='one-more-note btn btn-info' style={{ marginLeft: '34.5555555%', marginTop: 10}} onClick={() => window.location.reload()}>Создать еще одну заметку</button>
            </div>
                : null
            }

        </div>
    );
};

export default Create;
