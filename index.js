let url = "https://6456721c5f9a4f2361445c32.mockapi.io/users";


// HTTP method in order to get the data  (READ data from server)

//get the data from derver need to convert the data into JSON (JSON.PARSE) format.

//post the data to the server need to to convert the data into HJSON.STRINGIFY



async function GetData(){
    try {
        const response = await fetch(url,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
            }
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

GetData()

// HTTP POST METHOD (SEND THE DATA TO SERVER (create))

async function createData(){
    let data={
        name : "abid ansari",
        email: "abid.ansari@gmail.com",
    }

    try {
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body :JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }
}
// createData()


// PUT method to update the data to server on base of unique key or ID 

async function updateData(){
    let data={
        name : "amir",
        email : "amir@gmail.com",
    }
    //here we are attaching the id of the person which we have to upadte
    try {
        const response = await fetch(url + "/35", {
            method: "PUT",
            body: JSON.stringify(data),
            headers : {
                "content-type": "application/json",
            },
        });

        const responseData = await response.json();
        console.log(responseData);

    } catch (error) {
        console.log(error);
    }
}

// updateData();

// DELETE method (delete the data from the server )
async function deleteData() {
    
    try {
        const response = await fetch (url + '/35' ,{
        method: "DELETE",
        //here not suing header also this will work
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//amir data deleted

deleteData()


