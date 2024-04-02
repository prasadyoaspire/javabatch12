import {createStore} from 'redux';
import rootReducer from './rootReducder';

export default function configureStore() {

    return createStore(
        rootReducer
    )
}