import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users')
        .doc('6NCURuEWfm9XzgeUUVMn')
        .collection('cartItem')
        .doc('TnXVYcscEQ69ILwjX0m7');


firestore.doc('/users/6NCURuEWfm9XzgeUUVMn/cartItem/TnXVYcscEQ69ILwjX0m7');
firestore.collection('/users/6NCURuEWfm9XzgeUUVMn/cartItem');

