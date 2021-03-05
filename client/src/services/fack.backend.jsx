const baseUrl= process.env.REACT_APP_API_URL;

const fetchWithoutToken = ( endpoint, data, method = 'GET'  ) => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        })
    }
}

const fetchWithToken = (endpoint, data = undefined, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem("token");

    if (method === 'GET') {
        return fetch( url, {
            method,
            headers: {
                'x-token': token
            }
        } );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token' : token
            },
            body: JSON.stringify( data )
        })
    }
    // fetch("localhost:4000/api/datanode/1", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}

// import {Jwt_token} from '../data/config'
function authHeader() {
    // return authorization header with jwt token
    const currentUser = localStorage.getItem('token')
    if (currentUser) {
        return { Authorization: `Bearer ${currentUser}` };
    }else {
        return {};
    }
}

export {
    fetchWithoutToken,
    fetchWithToken,
    authHeader
}



/* TODO: Mejorar authenticacion, averigurar como mejorar este codigo, codigo parchado */
// export const configureFakeBackend = () => {
//     let users = [{ email: 'test@gmail.com', password: 'test123'}];
//     let realFetch = window.fetch;
//     window.fetch = function (url, opts) {
//         const isLoggedIn = opts.headers['Authorization'] === `Bearer ${Jwt_token}`;
//         return new Promise((resolve, reject) => {
//             // wrap in timeout to simulate server api call
//             // alert("condigFaceBackend")
//             setTimeout(() => {
//                 // authenticate - public

//                 if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
//                     const params = opts.body;
//                     const user = users.find(x => x.email === params.email && x.password === params.password);
//                     if (!user) return error('Username or password is incorrect');
//                     return ok(Jwt_token);
//                 }

//                 // get users - secure
//                 if (url.endsWith('/users') && opts.method === 'GET') {
//                     if (!isLoggedIn) return unauthorised();
//                     return ok(users);
//                 }

//                 // pass through any requests not handled above
//                 realFetch(url, opts).then(response => resolve(response));

//                 // private helper functions

//                 function ok(body) {
//                     resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
//                 }

//                 function unauthorised() {
//                     resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
//                 }

//                 function error(message) {
//                     resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
//                 }
//             }, 500);
//         });
//     }
// }

// export function handleResponse(response) {
//     // return response.text().then(text => {
//     //     const data = text && JSON.parse(text);
//     //     alert(data)
//     //     if (!response.ok) {
//     //         if ([401, 403].indexOf(response.status) !== -1) {
//     //             // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//     //             localStorage.removeItem('token')
//     //             localStorage.removeItem('profileURL')
//     //         }
//     //     }
//         return null;
//     // });
// }