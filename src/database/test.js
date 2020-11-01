const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
   
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-18.9280583",
        lng: "-48.3583749",
        name: "Lar de Odin",
        about: "Lar de Odin - Presta assistência a crianças de 03 a 17 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "554499887765443",
        images: [
            "https://images.unsplash.com/photo-1579445710183-f9a816f5da05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1270&q=80",

            "https://images.unsplash.com/photo-1498712681408-fdcfb0eca86e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80",

            "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80",

            "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
        ].toString(),
        instructions: "Venha conhecer o lar de Odin, como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 09h as 18h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))

})