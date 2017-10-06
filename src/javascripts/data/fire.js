/**
 * Created by nate on 30/09/2017.
 */

import * as firebase from 'firebase'
import config from '../config/firebaseKeys';

firebase.initializeApp(config);

export default firebase;
