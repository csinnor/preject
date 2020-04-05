// Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyCWgNUg6MGWrnQ0cpDe1oEC-jiIcuHsXiI",
    authDomain: "job-distribution-system-1be63.firebaseapp.com",
    databaseURL: "https://job-distribution-system-1be63.firebaseio.com",
    projectId: "job-distribution-system-1be63",
    storageBucket: "job-distribution-system-1be63.appspot.com",
    messagingSenderId: "650324397430",
    appId: "1:650324397430:web:2293c79dedb39021a6fe57",
    measurementId: "G-PXCD86M6Q4"
        };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

const db=firebase.firestore();
//const table=document.querySelector('#tbresult');
const form=document.querySelector('#appointment-form');

//db.collecttion('customer').get().then((snapshot)=>{
//   snapshot.forEach(doc=>{
//        showData(doc);
//   });
//});

form.addEventListener('submit',(e)=>{
    //e.preventDefault();
    db.collection('Customer').add({
        FirstName:form.firstname.value,
        LastName:form.lastname.value,
        Email:form.email.value,
        Password:form.password.value,
        Phonenumber:form.phone_number.value,
        Gender:form.course_type.value,
        HouseNo:form.house_number.value,
        Village:form.village.value,
        VillageNo:form.village_no.value,
        SubDistrict:form.sub_district.value,
        District:form.district.value,
        Province:form.province.value,
        PostalCode:form.postalcode.value
    });
    form.firstname.value='';
});
   // function showData(data){
   // var row=table.insertRow(-1)
   // var cell1=row.insertCell(0);
   // var cell2=row.insertCell(1);
   // var cell3=row.insertCell(2);
   // var cell4=row.insertCell(3);
   // cell1.innerHTML=doc.data().name;
   // cell2.innerHTML=doc.data().city;
   // cell3.innerHTML=doc.data().age;
//} 
