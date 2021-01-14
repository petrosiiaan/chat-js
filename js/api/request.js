function request(method, url, params = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            }
        } 
        xhr.onerror = () => {
            reject(xhr.responseText)
        }
        if(method === "GET") {
            xhr.open(method, url)
            xhr.send()
        }
        else if(method === "POST") {
            xhr.open(method, url, params)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            
            xhr.send(params)
        }
    }) 
}


