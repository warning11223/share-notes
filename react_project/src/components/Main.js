import React from 'react';
import {NavLink} from "react-router-dom";
import {} from 'bootstrap'

const Main = () => {
    return (
        <>
            <div className='row'>
                <div className='col-12'>

                    <div className='text'>
                       <ul className="row button-list">
                           <li className="col-6"><NavLink  to='/create' className="btn btn-info">Создать note</NavLink></li>
                           <li className="col-6"><NavLink  to='/note' className="btn btn-info">Посмотреть note</NavLink></li>
                       </ul>
                    </div>

                    <div className="text">
                        <p>ShareNotes - приложение для создания заметок.</p>
                        <p>Как сделать заметку?</p>
                        <ol>
                            <li>Нажмите на <i><b>"Создать note"</b></i></li>
                            <li>Напиши заметку и нажмите <i><b>"Create"</b></i></li>
                        </ol>
                        <p>Как найти заметку?</p>
                        <ol>
                            <li>Нажмите на <i><b>"Посмотреть note"</b></i></li>
                            <li>Введите hash заметки и нажмите <i><b>"Search"</b></i></li>
                            <li>Либо же можно перейти по созданному URL адресу заметки</li>
                        </ol>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Main;
