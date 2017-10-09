import * as firebase from 'firebase';

export function login(userEmail,userPassword){
    return dispatch => {
        console.log(userEmail,userPassword);
        firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
            .then(user=>{
                console.log(user);
                var username = "";
                firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
                    // return (snapshot.val().name) || 'Anonymous';
                    dispatch({
                        type: "LOGIN",
                        payload: {
                            uid: user.uid,
                            username : snapshot.val().name
                        }
                    });
                });

            })
            .catch(function(error) {
                dispatch({
                    type: "LOGIN_ERRORS",
                    payload: {
                        errorCode : error.code,
                        errorMessage : error.message
                    }
                });
        });
    }
}

export function logout(){
    return dispatch => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            dispatch({
                type: "LOGOUT",
                payload : {}
            });
          }, function(error) {
            // An error happened.
            dispatch({
                type: "LOGOUT_ERRORS",
                payload : {
                    errorCode : error.code,
                    errorMessage : error.message
                }
            });
          });

    }
}