function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch data!"));
        }, 2000);
    });
}

async function main() {
    try{
    console.log("Fetching data...");

    const result = await getData();

    console.log(result);
    
    }catch(error){
        console.log("Error:",error.message);
    }
    console.log("Program continues after error handling.")
}

main();