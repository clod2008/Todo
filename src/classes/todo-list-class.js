import { Todo } from "./todo.class";


export class TodoList {


    constructor() {

        // this.todos = [];
        this.cargarLocalStorage ();
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalSotrage();
    }

    eliminarTodo ( id ) {

        this.todos = this.todos.filter( todo => todo.id != id)
        this.guardarLocalSotrage();

    }

    marcarCompletado ( id ) {

        for( const todo of this.todos ) {

            if( todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalSotrage();
                break;

            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );

    }


    guardarLocalSotrage(){

        localStorage.setItem('todo', JSON.stringify(this.todos) );

    }

    cargarLocalStorage (){

        // if( localStorage.getItem('todo')) {
        //     this.todos =  JSON.parse( localStorage.getItem('todo') ) ;
        //     console.log('CragarLocal: ', this.todos)
        // }else{
        //     this.todos = [];
        // } ****** lo de abajo es lo mismo con Op ternario ******

        this.todos  = ( localStorage.getItem('todo')) 
                    ? JSON.parse( localStorage.getItem('todo') )
                    : [];
        
        // this.todos = this.todos.map( obj => Todo.fromJason( obj ) ); *** igual que el de abajo 
        this.todos = this.todos.map( Todo.fromJason );

    }

}