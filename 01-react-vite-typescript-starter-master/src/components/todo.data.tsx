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
}

const TodoData = (props :IProps) => {
    const {todos,owner ="unknown"}=props;
  return (
    <div>
        <div>owner={owner}</div>
      {todos.map(item=>{
        return (
            <div key={item.id}>
                <div style={{padding:"10px 0"}}>{item.id}-{item.title}</div>
                
              &nbsp; &nbsp; &nbsp;<button>Delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default TodoData
