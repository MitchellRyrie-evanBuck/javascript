function Hero(){
    this.name='111'
    this.sayMe=function(){
        console.log(this.name)//111
    }
}
function smallHero(){
    Hero.call(this)
    this.age=18
    this.sayMe=function(){
        console.log(this.name+this.age)//11118
    }
}
var hero=new smallHero()
hero.sayMe()


var obj={
    name:'222',
    age:40,
    sayMe:hero.sayMe
}
obj.sayMe()   //22240