export default class Cookies{
    static setCookie(name:string, value:string | null, daysTolive:number | null): number{
        const date = new Date()
        if(typeof daysTolive == "number"){
            date.setTime(date.getTime() * daysTolive * 24 * 60 * 60 * 1000)
            let expires = "expires="+date.toUTCString()
            document.cookie =  `${name}=${value}; ${expires}; path=/`
        }
        return -1
        
    }
    static getCookie(name:string): void{
        Cookies.setCookie(name, null, null)
    }
    static deleteCookie(name:string):string | null{
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split("; ")
        let result : string | null = null;

        cArray.forEach(element =>{
            if(element.indexOf(name) == 0){
                result = element.substring(name.length + 1)
            }
       })
        return result
    }
}