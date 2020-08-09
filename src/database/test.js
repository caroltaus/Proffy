const Database = require('./db')  //traz o db do aqr db.js
const createProffy = require('./createProffy')


Database.then(async (db) =>{
    //Inserir dados
    proffyValue = {     //tabela proffy
        name:"Titulus", 
        avatar: "https://instagram.fcgh11-1.fna.fbcdn.net/v/t51.2885-15/e35/95730782_251178129366559_5456288891559990833_n.jpg?_nc_ht=instagram.fcgh11-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=fUxpdayKZdsAX8HEzmw&oh=4cf290fa8e3008e7f65868153d349810&oe=5F54394E", 
        whatsapp: "9925876878", 
        bio: "Miau Miau Miau",  
    }

    classValue = {    //tabela class
        subject: 1, 
        cost: "4000000",
        // o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [  //tabela schedule
        //class_id virá pelo banco de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ]

    //await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // Consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)  --> ver no terminal


    // consultar as classes de um determinado professor e trazer junto seus dados
    const selectClassesAndProffys = await db.all (`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 2;
    `)
    //console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por ex, é das 8h-18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    //console.log(selectClassesSchedules)

})