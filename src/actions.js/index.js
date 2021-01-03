

export function moviesList(){
  return{
    type:'MOVIES_LIST',
    payload:[
      {id:1, name:"The Heat"},
      {id:2, name:"Sweet November"},
      {id:3, name:"Rust Creek"},
    ]
  }
}

export function directorsList(){
  return{
    type:'DIR_LIST',
    payload:[
      {id:1, name:"Anthony Tripoli"},
      {id:2, name:"Steven Seagal"},
      {id:3, name:"Andrew Henz"},
    ]
  }
}