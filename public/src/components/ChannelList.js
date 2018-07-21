import React from 'react';
import { Query, Mutation  } from "react-apollo";
import gql from "graphql-tag";

const userList = gql`
{
  users{
    name,
    username
  }
}
`
const channells = gql`
{
  channels{
    name
    id
    year
  }
}
`
const ADD_CHNL = gql `
  mutation addChanl($id: Int!, $name:String!, $year:Int) {
    addChannel(id:$id, name:$name, year:$year){
      id
      name
      year
    }
  }
`
const AddChannel = ()=>{
  let id
  let name
  let year
  return (
    <Mutation mutation={ADD_CHNL}> 
      {(addChannel,{data})=>(
        <div>
          <form onSubmit={e=>{
            e.preventDefault()
            addChannel({ variables: { id: id.value, name: name.value, year: year.value}})
            id.value = ""
            name.value = ""
            year.value = ""
          }}>
            <input placeholder="id" ref ={ node=>{ id = node} }/>
            <input placeholder="name"  ref ={ node=>{ name = node} }/>
            <input placeholder="year"  ref ={ node=>{ year = node} }/>
            <button>Add Channel</button>
          </form>

        </div>
      )}
    </Mutation>
  )
}
const ChannelList = () => (
  <Query query={channells}>
  { ({ loading, error, data })=>{
      if (loading) {
        return (
          <p>loadinhg...</p>
        )
      }
      if (error) {
        return (
          <p>error</p>
        )
      }

      return data.channels.map((item,index)=>{
        return <p key={index}>{item.id}  ---<span>{item.name}</span> ---<span>{item.year}</span></p>
      })
  } }
  </Query> 

  )
  
const UserList = () => (
  <Query query={userList}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <p>loadinhg...</p>
        )
      }
      if (error) {
        return (
          <p>error</p>
        )
      }

      return data.users.map((item, index) => {
        return <p key={index}>{item.name}  ---<span>{item.username}</span></p>
      })
    }}
  </Query>

)
  const GraphQlComponent = () => (
    <div>
      <ChannelList />
      <AddChannel />
      
      <UserList />
    </div>
  );
  
  export default GraphQlComponent;  

  
