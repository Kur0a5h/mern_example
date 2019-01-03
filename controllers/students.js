const db = require('../db');
const mysql = require('mysql');


exports.getAll = (req,res) => {
    
    const sql = 'SELECT * FROM `students`';

    const resp = db.query(sql);

    console.log('Get Students Resp:', students);

    res.send({
        success: true,
        students: students
    })

}

exports.getOne = async (req,res)=>{
    const{ student_id } = req.params;
    try{
        if(!student_id){
            throw new Error('No ID provided');
        }
    
        const sql = 'SELECT * FROM ?? WHERE ??=? LIMIT 1';
        const inserts = ['students', 'id', students_id];

        const formattedSql = mysql.format(sql, inserts);

        const [student] = await db.query(formattedSql);

        if(!student){
            console.log('No student found');
        }

        console.log('Student:', student);

        res.send({
            success: true,
            student: student
        });
    }catch(err){
        res.status(422).send('Unable to retrieve student');
    }
}
