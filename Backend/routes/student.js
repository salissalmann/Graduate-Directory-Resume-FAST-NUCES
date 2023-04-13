const express = require('express');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = "secretkeyresumes";
const bcrypt = require('bcrypt');
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
  
Router.post('/CreateAIStudent', jsonParser, async (Req, Res) => {
    let AddedStudents = [];
    let UpdatedExcel = [];
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

        const Salt = await bcrypt.genSalt(10);
        const HashedPassword = await bcrypt.hash(Password , Salt);

        const CreateStudent = await Student.create({
          name: Students.name,
          rollNumber: Students.rollNumber,
          email: Students.email,
          password: HashedPassword,
          department: Students.department,
        });

        let ToExcel = {
           name: Students.name,
           rollNumber: Students.rollNumber,
           email : Students.email,
           password: Password,
           department: Students.department
        }

        UpdatedExcel.push(ToExcel)

        Success = true;
        const Data = { user: { id: CreateStudent.id } };
        const AuthToken = jwt.sign(Data, SECRET_KEY);
        AddedStudents.push(CreateStudent);
      }
  
      const updatedStudents = UpdatedExcel.map(student => {
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

Router.post('/login', jsonParser, async (Req, Res) => {
  try {
      let UserFound = await Student.findOne({ email: Req.body.email});

      if (!UserFound) {
          return Res.status(400).json({ Success: false, Error: "Enter Correct Email/Password" });
      }

      const ComparePassword = await bcrypt.compare(Req.body.password , UserFound.password);
      if (!ComparePassword)
      {
          return Res.status(400).json({ Success: false , Error: "Enter Correct Email/Password"});     
      }

      const Data = { user: { id: UserFound.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);

      UserFound = await Student.findOne({ email: Req.body.email}).select("-password")

      Res.json({ Success: true, AuthToken: AuthToken , User: UserFound });
  } catch (error) {
      return Res.status(400).json({ Error: "An Error Occured" });
  }
});


Router.post('/CreateCSStudent', jsonParser, async (Req, Res) => {
  let AddedStudents = [];
  let UpdatedExcel = [];
  let Success = false;
  try {
    const workbook = XLSX.readFile("./CSStudents.xlsx");
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
        department: 'BSCS',
      };

      const Salt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(Password , Salt);

      const CreateStudent = await Student.create({
        name: Students.name,
        rollNumber: Students.rollNumber,
        email: Students.email,
        password: HashedPassword,
        department: Students.department,
      });

      let ToExcel = {
         name: Students.name,
         rollNumber: Students.rollNumber,
         email : Students.email,
         password: Password,
         department: Students.department
      }

      UpdatedExcel.push(ToExcel)

      Success = true;
      const Data = { user: { id: CreateStudent.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);
      AddedStudents.push(CreateStudent);
    }

    const updatedStudents = UpdatedExcel.map(student => {
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
    XLSX.writeFile(newWorkbook, 'CSBatch-Updated.xlsx');
    Res.send({ Success: Success, Data: AddedStudents });
  } catch (error) 
  {
    console.error(error.message);
    return Res.status(400).json({ Error: "An Error Occured" });
  }
});



Router.post('/CreateCYStudent', jsonParser, async (Req, Res) => {
  let AddedStudents = [];
  let UpdatedExcel = [];
  let Success = false;
  try {
    const workbook = XLSX.readFile("./CYStudents.xlsx");
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
        department: 'BSCY',
      };

      const Salt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(Password , Salt);

      const CreateStudent = await Student.create({
        name: Students.name,
        rollNumber: Students.rollNumber,
        email: Students.email,
        password: HashedPassword,
        department: Students.department,
      });

      let ToExcel = {
         name: Students.name,
         rollNumber: Students.rollNumber,
         email : Students.email,
         password: Password,
         department: Students.department
      }

      UpdatedExcel.push(ToExcel)

      Success = true;
      const Data = { user: { id: CreateStudent.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);
      AddedStudents.push(CreateStudent);
    }

    const updatedStudents = UpdatedExcel.map(student => {
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
    XLSX.writeFile(newWorkbook, 'CYBatch-Updated.xlsx');
    Res.send({ Success: Success, Data: AddedStudents });
  } catch (error) 
  {
    console.error(error.message);
    return Res.status(400).json({ Error: "An Error Occured" });
  }
});


Router.post('/CreateDSStudent', jsonParser, async (Req, Res) => {
  let AddedStudents = [];
  let UpdatedExcel = [];
  let Success = false;
  try {
    const workbook = XLSX.readFile("./DSStudents.xlsx");
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
        department: 'BSDS',
      };

      const Salt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(Password , Salt);

      const CreateStudent = await Student.create({
        name: Students.name,
        rollNumber: Students.rollNumber,
        email: Students.email,
        password: HashedPassword,
        department: Students.department,
      });

      let ToExcel = {
         name: Students.name,
         rollNumber: Students.rollNumber,
         email : Students.email,
         password: Password,
         department: Students.department
      }

      UpdatedExcel.push(ToExcel)

      Success = true;
      const Data = { user: { id: CreateStudent.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);
      AddedStudents.push(CreateStudent);
    }

    const updatedStudents = UpdatedExcel.map(student => {
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
    XLSX.writeFile(newWorkbook, 'DSBatch-Updated.xlsx');
    Res.send({ Success: Success, Data: AddedStudents });
  } catch (error) 
  {
    console.error(error.message);
    return Res.status(400).json({ Error: "An Error Occured" });
  }
});


Router.post('/CreateFSMStudent', jsonParser, async (Req, Res) => {
  let AddedStudents = [];
  let UpdatedExcel = [];
  let Success = false;
  try {
    const workbook = XLSX.readFile("./FSMStudents.xlsx");
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
        department: 'FSM',
      };

      const Salt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(Password , Salt);

      const CreateStudent = await Student.create({
        name: Students.name,
        rollNumber: Students.rollNumber,
        email: Students.email,
        password: HashedPassword,
        department: Students.department,
      });

      let ToExcel = {
         name: Students.name,
         rollNumber: Students.rollNumber,
         email : Students.email,
         password: Password,
         department: Students.department
      }

      UpdatedExcel.push(ToExcel)

      Success = true;
      const Data = { user: { id: CreateStudent.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);
      AddedStudents.push(CreateStudent);
    }

    const updatedStudents = UpdatedExcel.map(student => {
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
    XLSX.writeFile(newWorkbook, 'FSMBatch-Updated.xlsx');
    Res.send({ Success: Success, Data: AddedStudents });
  } catch (error) 
  {
    console.error(error.message);
    return Res.status(400).json({ Error: "An Error Occured" });
  }
});

Router.post('/CreateEEStudent', jsonParser, async (Req, Res) => {
  let AddedStudents = [];
  let UpdatedExcel = [];
  let Success = false;
  try {
    const workbook = XLSX.readFile("./EEStudents.xlsx");
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
        department: 'BSEE',
      };

      const Salt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(Password , Salt);

      const CreateStudent = await Student.create({
        name: Students.name,
        rollNumber: Students.rollNumber,
        email: Students.email,
        password: HashedPassword,
        department: Students.department,
      });

      let ToExcel = {
         name: Students.name,
         rollNumber: Students.rollNumber,
         email : Students.email,
         password: Password,
         department: Students.department
      }

      UpdatedExcel.push(ToExcel)

      Success = true;
      const Data = { user: { id: CreateStudent.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);
      AddedStudents.push(CreateStudent);
    }

    const updatedStudents = UpdatedExcel.map(student => {
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
    XLSX.writeFile(newWorkbook, 'EEBatch-Updated.xlsx');
    Res.send({ Success: Success, Data: AddedStudents });
  } catch (error) 
  {
    console.error(error.message);
    return Res.status(400).json({ Error: "An Error Occured" });
  }
});

Router.post('/CreateMSStudent', jsonParser, async (Req, Res) => {
  let AddedStudents = [];
  let UpdatedExcel = [];
  let Success = false;
  try {
    const workbook = XLSX.readFile("./MSStudents.xlsx");
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
        department: element['Program'],
      };

      const Salt = await bcrypt.genSalt(10);
      const HashedPassword = await bcrypt.hash(Password , Salt);

      const CreateStudent = await Student.create({
        name: Students.name,
        rollNumber: Students.rollNumber,
        email: Students.email,
        password: HashedPassword,
        department: Students.department,
      });

      let ToExcel = {
         name: Students.name,
         rollNumber: Students.rollNumber,
         email : Students.email,
         password: Password,
         department: Students.department
      }

      UpdatedExcel.push(ToExcel)

      Success = true;
      const Data = { user: { id: CreateStudent.id } };
      const AuthToken = jwt.sign(Data, SECRET_KEY);
      AddedStudents.push(CreateStudent);
    }

    const updatedStudents = UpdatedExcel.map(student => {
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
    XLSX.writeFile(newWorkbook, 'MSBatch-Updated.xlsx');
    Res.send({ Success: Success, Data: AddedStudents });
  } catch (error) 
  {
    console.error(error.message);
    return Res.status(400).json({ Error: "An Error Occured" });
  }
});


module.exports = Router;
