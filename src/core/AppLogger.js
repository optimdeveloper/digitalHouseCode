export const logger = (message, optionalParams) => {
    if (optionalParams !== undefined)
        console.log(message, optionalParams)
    else
        console.log(message)
}