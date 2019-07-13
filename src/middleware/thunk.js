// Build middleware here
export default store =>next=>action => {
    console.log("The middleware is working");
    console.log("Store", store);
    console.log("Next",next);
    console.log("Action", action);
    if(typeof action !== 'function')
        return next(action);
    return action(store.dispatch);
} 