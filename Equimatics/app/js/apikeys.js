

// File Configures the API information

export function configureKey(){
    let file = "../../test.env"
    let data = fetch (file).then(x => x.text()).then(function(data){
          let data_cleaned = data.split("=")[1]
          return data_cleaned
     })
    return data
}

export function firebaseConfigKeys(){
  let file = "../../../firebase.env"
  let data = fetch (file).then(x => x.text()).then(function(data){
        let data_cleaned = data.split("\n")
        let firebaseConfig = {}
        for (let i =0 ; i < data_cleaned.length; i++){
          let info = data_cleaned[i].split("=")
          firebaseConfig[info[0]] = info[1]
        }
        delete firebaseConfig[""]
        
        return firebaseConfig
   })
  return data
}
