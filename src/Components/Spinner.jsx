import  { Component } from 'react'
import loading from '../Components/SpinnerLoading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{ width: '2vw'}} />
      </div>
    )
  }
}
