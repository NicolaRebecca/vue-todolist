// Rifare l’esercizio della to do list come fatto assieme in classe:
// stampare in pagina un item per ogni elemento contenuto in un array
// ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// predisporre un input per aggiungere un nuovo item alla lista: digitando il 
// tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista


new Vue(
    {
        el: '#app',
        data: {
            toDoList: [
        ],
        newTask: '',
        },
        methods: { 
            addTask: function(){
                this.toDoList.push(this.newTask);
                this.newTask ='';
            },
            deleteTask: function(index){
                this.toDoList.splice(index,1);
            }
        }
    }
 );
  
