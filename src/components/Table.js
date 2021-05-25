import React from 'react'
import MaterialTable from 'material-table'

function Table() {

    const [Data, setData] = React.useState([])

    const titles=[
        {title:'ImageUrl',field:'image'},
        {title:'Food Title',field:'title'},
        {title:'Price',field:'price'},
        {title:'Rating',field:'rating'},
        {title:'Food Type',field:'foodType'},
    ]

   React.useEffect(() => {
     fetch(`https://my-json-server.typicode.com/HARIHARANSANTHANAM/recepie/Recipie`)
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         console.table(data)
         setData(data)
     })
     .catch(error=>{
         console.log(error)
     })
   }, [])

   const handleRowUpdate=(newData,oldData,resolve,reject)=>{
       const RowId=oldData.id;
        fetch(`https://my-json-server.typicode.com/HARIHARANSANTHANAM/recepie/Recipie/${RowId}`,{
           method:'PUT',
           body: JSON.stringify(newData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
       })
       .then(res=> res.json())
       .then(data=>{
           console.table(data)
           const dataUpdate = [...Data];
           const index = oldData.tableData.id;
           dataUpdate[index] =data;
           setData([...dataUpdate]);
           resolve();
       })
       .catch(e=>{
           console.log(e);
           reject()
       })
   }


   const handleRowInsert=(newData,resolve,reject)=>{
    fetch(`https://my-json-server.typicode.com/HARIHARANSANTHANAM/recepie/Recipie`,{
        method:'POST',
        body: JSON.stringify(newData),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
       }
    })
    .then(res=> res.json())
    .then(data=>{
        console.table(data)
        setData([...Data,data]);
        resolve();
    })
    .catch(e=>{
        console.log(e);
        reject()
    })
   }

   const handleRowDelete=(DeleteRow,resolve,reject)=>{
    fetch(`https://my-json-server.typicode.com/HARIHARANSANTHANAM/recepie/Recipie/${DeleteRow.id}`,{
        method:'DELETE'
    })
    .then(res=> res.json())
    .then(data=>{
        console.table(data)
        const dataDelete = [...Data];
         const index = DeleteRow.tableData.id;
        dataDelete.splice(index, 1);
         setData([...dataDelete]);
        resolve();
    })
    .catch(e=>{
        console.log(e);
        reject()
    })
   }


    return (
        <div style={{margin:40}}>
            <MaterialTable
            title="Recipie Details"
            columns={titles}
            data={Data}
            editable={{
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                            handleRowUpdate(newData,oldData,resolve,reject); 
                          
                    }),
                    onRowAdd: newData =>
            new Promise((resolve, reject) => {
                handleRowInsert(newData,resolve,reject)
            }),
            onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                       handleRowDelete(oldData,resolve,reject)
            })
            }}
            options={
                {exportButton:true}
            }
            />
        </div>
    )
}

export default Table
