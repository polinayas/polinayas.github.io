var firebaseConfig = {
    apiKey: "AIzaSyDxZ-_pQARF9_z2qkZEcD29NUNKX1qK2XM",
    authDomain: "beargame01-b2a0a.firebaseapp.com",
    databaseURL: "https://beargame01-b2a0a.firebaseio.com",
    projectId: "beargame01-b2a0a",
    storageBucket: "beargame01-b2a0a.appspot.com",
    messagingSenderId: "343275173675",
    appId: "1:343275173675:web:456fababd6d9d808c9f76e",
    measurementId: "G-C977V27YJ0"
  };
  // Initialize Firebase
  

  var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
        firebase.firestore().settings({
            cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
        });


   const submitPlayers = document.querySelector("#submit_btn");
   const name = document.querySelector("#name");
   const leaderBoard = document.querySelector("#leaderBoard");
   const score = document.querySelector("#demo2");

function renderCafe(doc){
    let tr = document.createElement('tr');
    let name = document.createElement('span');
    let score = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    score.textContent = doc.data().score;

    tr.appendChild(name);
    tr.appendChild(score);

    leaderBoard.appendChild(tr);
}

// real-time listener
//snapshot an obj that represents your doc ..grab the data i t contains by calling data on it
db.collection('players').orderBy('score', "desc").onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
        changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);}
    })
})

// saving data
submitPlayers.addEventListener("click",function(){
    if( document.getElementById("name").value != ''){
    //e.preventDefault();
    db.collection('players').add({
        name: name.value,
        score: parseInt(score.value)
        });
      }
    });

function display(){
          document.getElementById('table-to-refresh').style.display = "block";
}

