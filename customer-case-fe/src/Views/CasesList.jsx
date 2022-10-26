import { useState, useEffect } from 'react'
import Case from '../components/Case'

const CasesList = () => {

  const [ccases, setCcases] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/Cases')
      .then(res => {
        return res.json();
      })
      .then(data => {
        data.sort((a, b) => { return a.timeStamp - b.timeStamp })
        setCcases(data);
        setLoading(false)
      })      
  }, []);

  return (
    <div className='listBody'>
      { loading && <div> Loading...</div> }
      { ccases && ccases.length ? ccases.map(ccase => (<Case key={ccase.id} Case={ccase}/>))
      :
      !loading && <p>There is no customer case received.</p>}
    </div>
  )
}

export default CasesList