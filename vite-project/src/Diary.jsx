

function Diary({title,date,body}){

return(
  <div className="diary-entry">
          <h3>{title}</h3>
          <p><em>{date}</em></p>
          <p>{body}</p>
        </div>
)
}
  export default Diary