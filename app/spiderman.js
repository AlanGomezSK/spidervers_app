class spiderman  {
    constructor(name,age,actor,nOfMovies,studio,){
        this.name=name;
        this.age=age;
        this.actor=actor;
        this.nOfMovies=nOfMovies;
        this.studio=studio;
    }
    getInfo(){
        return `Hey, I'm Tom Holland from Marvel studio`
    }
}
module.exports=spiderman