firebase.firestore().collection("users").onSnapshot(function(querySnapshot) {
console.log(querySnapshot);
});
firebase.firestore().collection("list-image").onSnapshot(function(querySnapshot) {
    console.log(querySnapshot);
    });
    