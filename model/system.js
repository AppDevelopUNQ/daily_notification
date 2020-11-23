const api = require('./api');
const senderModule = require('./send-mail/sendMail')

class Monitor{
    constructor(){
        this.active = false;
        this.turns = 0;
    }

    isOn(){
        return this.active;
    }

    turnOn(){
        this.active = true;
        this.monitor();
    }

    turnOff(){
        this.active = false;
    }

    monitor(){
        this.monitorAliveServices();//monitor the services in the alive list
        setInterval( () => {
            if(this.active){
                    this.monitor()}
        }, 3600000);//repeats the monitor method each x miliseconds 
    }
    
    monitorAliveServices(){
        api.get('/user/list').then(response => {
            this.turns = this.turns+1;
            console.log("start: " +this.turns)
            response.data.forEach(user => {
                //this.notify(user.email);
                console.log(user.email)
            })
        })
    }

    notify(receptor){
        senderModule.send("daily notification", "some data " + new Date(),receptor);
    }
}

module.exports = Monitor;
