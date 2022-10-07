import './CardUser.scss'
interface Props {
    icon:string,
    value:string,
    users:string
}
export const CardUser = (props:Props) => {

  return (
        <div className="card-user">
            <img src={props.icon} alt="cardIcon" />
            <p>{props.value}</p>
            <h1>{props.users}</h1>
        </div>
  )
}
