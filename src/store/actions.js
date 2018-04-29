import { NAVBAR_TITLE, LOADING, ERROR, SUCCESS_SAVE_MSG } from './actionsType';
import firebase from 'firebase';
import swal from 'sweetalert';

export const getTitle = (payload) => {
    return {
        type: NAVBAR_TITLE,
        payload
    }
}

export const saveMessage = (payload) => {
    return dispatch => {
        dispatch(loading());
        var newPostKey = firebase.database().ref().child('messages').push().key;
        var updates = {};
        updates['/messages/' + newPostKey] = payload;
        firebase.database().ref().update(updates).then((data)=>{
            dispatch(swalSuccess());
        }).catch(err => {
            dispatch(error());
        })
        
    }
}

const success = () => {
    return {
        type: SUCCESS_SAVE_MSG
    }
}

const loading = () => {
    return {
        type: LOADING
    }
}

const error = () => {
    return {
        type: ERROR
    }
}

const swalSuccess = () => {
    return dispatch => {
        swal("Message sent!", "Thank you for contacting me. I will response your message as soon as possible", "success");
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
        dispatch(success());
    }
}