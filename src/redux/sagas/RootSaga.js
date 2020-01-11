import { call, take, put, takeEvery } from "redux-saga/effects";

const LogInFunc = (email, password) => {
    console.log('email', email);
    console.log('password', password);
    
};
const LogUpFunc = (email, password) => {
    console.log('email', email);
    console.log('password', password);
};




function* logInAuthorization({credentions: {email, password}}) {
    console.log('email', email);
    console.log('password', password);

    try{
        const tokenLogIn = yield call(LogInFunc, email, password);
        yield put({type: 'LOGIN_SUCCESSES'})
    }catch(error){
        yield put({type: 'LOGIN_ERROR', error})
    }
};

function* logUpAuthorization(email, password) {
    try{
        const tokenLogUp = yield call(LogUpFunc, email, password);
        yield put({type: 'LOGUP_SUCCESSES'})
    }catch(error){
        yield put({type: 'LOGUP_ERROR', error})
    }
};

export default function* watcherAuthSaga() {
    yield takeEvery('LOGIN_REQUEST', logInAuthorization);
    yield take('LOGUP_REQUEST', logUpAuthorization);
};
