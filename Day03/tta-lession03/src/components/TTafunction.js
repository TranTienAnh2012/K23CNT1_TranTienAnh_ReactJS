import React from 'react'

export default function TTafunction() {
    //biến
    const name="Trần Tiến Anh";
    //biến đối tượng
    const user={
        firstName: "Tiến",
        lastName: "Anh "
    }
    //hàm
    const fullName=(user)=>{
        return  user.firstName + " " + user.lastName  ;
    }
    //elemen
    const elemen = (
        <div>
            {/* Bieu Thuc jsx */}
            {fullName(user)}
            <h3>welcome to, {name}</h3>

        </div>
    );
    //ham
    const hiMyfriend = (name)=>{
        if(name){
            return <h3> welcome to {name}</h3>
        }
        else{
            return <h3> welcome to feed-NTU - K23CNT1</h3>
        }
    }
  return (
    <div>
        <h1> TTa - jsx expression </h1>
        {/*su dung bien elemen */}
        {elemen}
        
        {/*bien khong gia tri*/}
        {hiMyfriend()}
       {/*bien co gan gia tri*/}
       {hiMyfriend(name)}
            {/*bien gia tri truc tiep 
                {hiMyfriend("Tran Tien Anh")}
            */}
            



    </div>

  )
}
