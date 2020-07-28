export class test3
{
    public message:string = "hej";
    public myval:string = "";

    constructor()
    {
        console.log("test3 constructor");
    }

    attached()
    {
        console.log("test3 attached");
    }

    detached()
    {
        console.log("test3 detached");
    }

    unbind()
    {
        console.log("test3 unbind");
    }

    movefrom:string ="move1";
    moveto:string = "move2";
    
    move()
    {
        let movefromEl = document.getElementById(this.movefrom);
        var movetoEl = document.getElementById(this.moveto);


        while (movefromEl.childNodes.length > 0) {
        movetoEl.appendChild(movefromEl.childNodes[0]);
        }
    }

    public bind(bindingContext) 
    {
        console.log("test3 bind");
    }
}