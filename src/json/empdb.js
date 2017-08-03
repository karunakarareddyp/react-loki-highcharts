import db from './db'

/*function getEmpCollection() {
    if(db.getCollection('employee-list')) {
        return db.getCollection('employee-list')
    } else {
        return db.addCollection('employee-list')
    }
}*/


const empList = db.addCollection('employee-list')

empList.insert({name: 'karna', age: 36, id:1})
empList.insert({name: 'chaitra', age: 16, id:2})
empList.insert({name: 'arjun', age: 6, id:3})
empList.insert({name: 'karunakar', age: 36, id:4})
empList.insert({name: 'reddy', age: 56, id:5})
empList.insert({name: 'ammar', age: 36, id:6})
empList.insert({name: 'kash', age: 61, id:7})
empList.insert({name: 'ravi', age: 22, id:8})
empList.insert({name: 'raghu', age: 33, id:9})

console.log("!!!!!!!!!!!!" + empList.data)

export const empdb = empList

