import axios from 'axios';


export function GetCandidates(fname=null, lname=null, email=null) {

    let parameters = {
        ...fname ? { fname: fname } : {},
        ...lname ? { lname: lname } : {},
        ...email ? { email: email } : {},
        
    }

    let data = axios.get(`http://localhost:8080/candidates`, {params: parameters}).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function GetCandidate(id) {

    
    let data = axios.get(`http://localhost:8080/candidates/${id}`).then(response => response.data);
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(data), 1000);
    })
}

export function CreateCandidate(canInfo) {
    return axios.post(`http://localhost:8080/candidates`, canInfo).then(response => response.data)
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });
}

export function UpdateCandidate(id,canInfo) {
    return axios.put(`http://localhost:8080/candidates/${id}`, canInfo).then(response => response.data)
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });
}

export function DeleteCandidate(id) {
    return axios.delete(`http://localhost:8080/candidates/${id}`).then(response => console.log(response))
        .catch(error => {
            console.log('There was an error!' + error.message, error);
        });
}