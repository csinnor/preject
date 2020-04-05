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
        Province:form.phone_number.value,
        District:form.phone_number.value,
        City:form.phone_number.value,
        PostalCode:form.phone_number.value
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
