const eventsObj = {}
        for(let i = 0; i < arrival.length; i++){
            let event = parseInt(arrival[i])
            let dur = duration[i]
        if(!eventsObj[event]){
            eventsObj[event] = dur
        }else if(eventsObj[event]){
            if(eventsObj[event] > dur){
                eventsObj[event] = dur
            } 
        }
    }
    // console.log(eventsObj)
    let result = 0
    let nextAvailTime = null;
    for(const event in eventsObj){
        const eventTime = parseInt(event)
        // console.log(eventTime, nextAvailTime)
        if(nextAvailTime === null){
            nextAvailTime = eventTime + eventsObj[event];
            result++;
            // console.log(nextAvailTime);
        }else if(eventTime >= nextAvailTime){
            nextAvailTime = eventTime + eventsObj[event];
            result++;
            // console.log(nextAvailTime);
        }
    }