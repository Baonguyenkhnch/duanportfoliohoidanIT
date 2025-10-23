// type TColor="red"| "blue" |"green"
// interface IColor {
//    colors:TColor
// }
// const color:IColor={colors:"red"}
interface IProps {
    todos :{
        id :number ;
        title :string ;
        isComplete :boolean
    }[];
    owner? :string
    age? :number
    isDeveloper?:boolean;

    deleteTodo :(v:number) =>void;
}

const TodoData = (props :IProps) => {
    const {todos,owner ="unknown",deleteTodo}=props;
  return (
    <div>
        <div>owner={owner}</div>
      {todos.map(item=>{
        return (
            <div key={item.id}>
                <div style={{padding:"10px 0"}}>{item.id}-{item.title}</div>
                
              &nbsp; &nbsp; &nbsp;<button onClick={()=>{
                deleteTodo(item.id)
              }}>Delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default TodoData
