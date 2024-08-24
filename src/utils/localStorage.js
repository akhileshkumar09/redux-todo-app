export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined;
        } 
        return JSON.stringify(serializedState);
    } catch(err){
        console.log(err);
        return undefined;
    }
}

export const saveState = (state) =>{
    try{
         const serializedState  = JSON.stringify(state);
         localStorage.setItem('state', serializedState);
    } catch(err){
         console.log(err);
    }
}