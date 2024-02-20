const url = "https://www.course-api.com/react-tours-project"


fetch(url)
.  then((resp)=> resp.json())
.catch((err)=> console.log(err))