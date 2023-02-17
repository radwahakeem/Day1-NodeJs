console.log("hi Radwa ");
 const fs = require("fs"); 
 
 
var incrementalId = 0;
if(process.argv[2] == "add"){
    let data = JSON.parse(fs.readFileSync("studentsGrades.txt","utf-8"));
    incrementalId=data.length;
    let studentData={id : incrementalId , name : process.argv[3] , grade : process.argv[4] };
    data.push(studentData);
    fs.writeFileSync("studentsGrades.txt",JSON.stringify(data));
    
}

else if(process.argv[2] == "edit"){

    let data = JSON.parse(fs.readFileSync("studentsGrades.txt","utf-8"));
    editedId=parseInt(process.argv[4]);
    console.log(data[editedId].name);
    if(editedId==data[editedId].id){
        data[editedId].grade = process.argv[3];
        console.log(data[editedId].grade);
      
        fs.writeFileSync("studentsGrades.txt",JSON.stringify(data));
    }
  
    
}

else if (process.argv[2] == "list"){
    let data = JSON.parse(fs.readFileSync("studentsGrades.txt","utf-8"));
      data.forEach(student => {
        console.log("student Id : " ,student.id );
        console.log("student name : " ,student.name );
        console.log("student grade : " ,student.grade );
        console.log(student);
      });
    console.log(data);
}

else if(process.argv[2] == "delete"){

    let data = JSON.parse(fs.readFileSync("studentsGrades.txt","utf-8"));
    deletedId=parseInt(process.argv[3]);
    console.log(data[deletedId].name);
    if( deletedId==data[deletedId].id){

      data.splice(deletedId,1);
        fs.writeFileSync("studentsGrades.txt",JSON.stringify(data));
    }
  
    
}





