function verdad (){
    return true;
   }
   console.log(verdad());
   
   const promesa = new Promise ((resolve, reject) => {
   
       setTimeout(() => {
           console.log("hola soy una promesa")
       }, 5000);
   });
   
   function* generaId() {
       let id = 0;
       if(id % 2 != 0) {
           id++
           if (id === 10) {
               return id
           }
           yield id // Esperando hasta que se vuelva a llamar
       }
   }
   console.log(generaId().next().value);
   console.log(generaId().next().value);
   console.log(generaId().next().value);