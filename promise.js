// there 3 stage reject , pending , fullfilled 
// promise = obj
//* then (fun ), catch(fun) 
// syncronous , asyncronous  
/*async function access() {
    let data = await fetch('https://jsonplaceholder.typicode.com/comments')
    let res = await data.json()
    console.log(res);
}
access()*/
async function access() {
    let data = await fetch('https://jsonplaceholder.typicode.com/comments')
    let res = await data.json()
    let result = res.map((e)=>`
        <tr>
            <td> ${e.postId}</td>
            <td> ${e.id}</td>
            <td> ${e.name}</td>
        </tr>
    `).join("")

    document.querySelector('#showdata').innerHTML=result
    }
    access()
