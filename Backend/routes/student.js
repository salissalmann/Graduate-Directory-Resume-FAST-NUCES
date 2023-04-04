const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkeyresumes";

const FetchUser = require('./middleware');
const Student = require('../models/student');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const XLSX = require('xlsx');



function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }
  
  Router.post('/CreateStudent', jsonParser, async (Req, Res) => {
    let AddedStudents = [];
    let Success = false;
    try {
      const workbook = XLSX.readFile("./AIStudents.xlsx");
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
  
      for (const element of data) {
        let Email = element.Email;
        let Password = generatePassword();
        Email = Email.toLowerCase();
        let Students = {
          name: element.Name,
          rollNumber: element['Roll No'],
          email: Email,
          password: Password,
          department: 'BSAI',
        };
  
        const CreateStudent = await Student.create({
          name: Students.name,
          rollNumber: Students.rollNumber,
          email: Students.email,
          password: Students.password,
          department: Students.department,
        });
        Success = true;
        const Data = { user: { id: CreateStudent.id } };
        const AuthToken = jwt.sign(Data, SECRET_KEY);
        AddedStudents.push(CreateStudent);
      }
  
      const updatedStudents = AddedStudents.map(student => {
        return {
          RollNo: student.rollNumber,
          Name : student.name,
          Department: student.department,
          Email: student.email,
          Password : student.password,
        };
      })

      const newWorksheet = XLSX.utils.json_to_sheet(updatedStudents);
      const newWorkbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Students');
      XLSX.writeFile(newWorkbook, 'AIBatch-Updated.xlsx');
      Res.send({ Success: Success, Data: AddedStudents });

    } catch (error) 
    {
      console.error(error.message);
      return Res.status(400).json({ Error: "An Error Occured" });
    }
  });
  
Router.get('/GetStudentDetails' , FetchUser , jsonParser , async (Req , Res)=>
{
      try 
      {
          const USERID = Req.user.id;
          const user = await Student.findById(USERID).select("-password")
          Res.send(user);
      } 
      catch (error) 
      {
          return Res.status(400).json({ Error: "An Error Occured"});
         
      }
})
Router.post('/login' ,  jsonParser , async (Req , Res)=>
{
    let Success=false;
    try 
    {
        let UserFound = await Student.findOne( { email: Req.body.email })
        if(!UserFound)
        {
            return Res.status(400).json({ Success: Success , Error: "Enter Correct Email/Password"});
        }

        if (UserFound.password !== Req.body.password)
        {
            return Res.status(400).json({ Success: Success , Error: "Enter Correct Email/Password"});
        }
        const Data = { user: { id: UserFound.id} } 
        const AuthToken = jwt.sign(Data , SECRET_KEY)
        Success = true;
        Res.send({Success: Success , AuthToken: AuthToken} );           
    } 
    catch (error) 
    {
        return Res.status(400).json({ Error: "An Error Occured"});
    }
})
module.exports = Router;
